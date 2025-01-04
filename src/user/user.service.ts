import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { AuthService } from 'src/auth/auth.service';
import { DataSource, Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from './config/profile.config';
import { UserCreateMany } from './user-create-many';
import { CreateManyUsersDto } from './dtos/create-many-user.dto';
import { CreateUserProvider } from './provider/create-user.provider';

@Injectable()
export class UserService {
  constructor(
    // injecting a service dependency (circular dependency injection)
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,

    // injecting user service repository dependency
    @InjectRepository(User)
    private userRepository: Repository<User>,

    // injecting environment variables
    private configService: ConfigService,

    // injecting module specific configuration dependencies (environment variables)
    @Inject(profileConfig.KEY)
    private profileConfiguration: ConfigType<typeof profileConfig>,

    private usersCreateMany: UserCreateMany,

    private createUserProvider: CreateUserProvider,
  ) {}

  public async createUser({ user }: { user: CreateUserDto }): Promise<User> {
    return await this.createUserProvider.createUser({ user });
  }

  public findAll({
    userParamsDTO,
    limit,
    page,
  }: {
    userParamsDTO: GetUsersParamDto;
    limit: number;
    page: number;
  }) {
    const environment = this.configService.get<string>('S3_BUCKET');
    console.log(`Environment: ${environment}`);

    console.log('NODE_ENV: ', process.env.NODE_ENV);

    console.log('Profile: ', this.profileConfiguration);

    throw new HttpException(
      'Api endpoint does not exist',
      HttpStatus.MOVED_PERMANENTLY,
      {
        description: 'Occurred because the API endpoint was deprecated',
        cause: 'Api endpoint does not exist',
      },
    );
  }

  public async findOneById({ id }: { id: number }) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  public async findUserByEmail({ email }: { email: string }) {
    try {
      const user = await this.userRepository.findOneBy({ email });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return user;
    } catch (error: any) {
      throw new RequestTimeoutException(`Timeout occurred: ${error.message}`);
    }
  }

  public async findUserByGoogleId({ googleId }: { googleId: string }) {
    try {
      const user = await this.userRepository.findOneBy({ googleId });

      if (!user) {
        // throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        return null; // return null if user not found, instead of throwing an exception
      }

      return user;
    } catch (error: any) {
      throw new RequestTimeoutException(`Timeout occurred: ${error.message}`);
    }
  }

  public async createMany({ users }: { users: CreateManyUsersDto }) {
    return await this.usersCreateMany.createMany({ users });
  }
}
