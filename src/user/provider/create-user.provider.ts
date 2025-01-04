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

@Injectable()
export class CreateUserProvider {
  constructor(
    // injecting user service repository dependency
    @InjectRepository(User)
    private userRepository: Repository<User>,

    // injecting hashing provider
    @Inject(forwardRef(() => HashingProvider)) // doing this because this is a circular dependency
    private hashingProvider: HashingProvider,
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

    // create a new user
    const newUser = await this.userRepository.create(user);
    await this.userRepository.save(newUser);

    return newUser;
  }
}
