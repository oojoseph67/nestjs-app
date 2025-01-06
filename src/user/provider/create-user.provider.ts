import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class CreateUserProvider {
  constructor(
    // injecting user service repository dependency
    @InjectRepository(User)
    private userRepository: Repository<User>,

    // injecting hashing provider
    @Inject(forwardRef(() => HashingProvider)) // doing this because this is a circular dependency
    private hashingProvider: HashingProvider,

    private mailService: MailService, // injecting mail service repository dependency... doing this without importing via module because mail.module.ts is a global module
  ) {}

  public async createUser({ user }: { user: CreateUserDto }): Promise<User> {
    // check user
    let existingUser = undefined;

    if (!user.googleId && !user.password) {
      throw new HttpException(
        'Provide a googleId or a password',
        HttpStatus.UNAUTHORIZED,
        {
          cause: 'either googleId or password was provided',
          description:
            'in other to create a user either googleId or password is required and none was provided',
        },
      );
    }

    try {
      existingUser = await this.userRepository.findOne({
        where: { email: user.email },
      });
    } catch (error) {
      throw new RequestTimeoutException('Request timeout', {
        cause: error,
        description: 'Request timeout',
      });
    }

    // handle exception
    if (existingUser) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    if (user.password) {
      const hashedPassword = await this.hashingProvider.hashPassword({
        password: user.password,
      });

      user.password = hashedPassword;
    }

    if (user.googleId) {
      user.googleId = user.googleId;
    }

    let newUser: User;

    try {
      // create a new user
      newUser = this.userRepository.create(user);
      // Save and send welcome email should be in the same transaction
      await this.userRepository.manager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.save(User, newUser);
          await this.mailService.sendWelcomeMail({ user: newUser });
        },
      );
    } catch (error: any) {
      console.log({ error });
      throw new HttpException(
        `User creation failed: ${error.message}`,
        HttpStatus.BAD_REQUEST,
        {
          cause: error.message,
          description: error.stack,
        },
      );
    }

    return newUser;
  }
}
