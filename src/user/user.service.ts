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
import { CreateUserDto } from './dtos/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from './config/profile.config';
import { CreateUserProvider } from './provider/create-user.provider';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    // injecting a service dependency (circular dependency injection)
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,

    // injecting user database model
    @InjectModel(User.name)
    private userModel: Model<User>,

    // injecting environment variables
    private configService: ConfigService,

    // injecting module specific configuration dependencies (environment variables)
    @Inject(profileConfig.KEY)
    private profileConfiguration: ConfigType<typeof profileConfig>,

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

  public async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  public async findOneById({ id }: { id: number }) {
    const user = await this.userModel.findOne({ id })

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  public async findUserByEmail({ email }: { email: string }) {
    try {
      const user = await this.userModel.findOne({ email })

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
      const user = await this.userModel.findOne({ googleId }).select('-password');

      if (!user) {
        // throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        return null; // return null if user not found, instead of throwing an exception
      }

      return user;
    } catch (error: any) {
      throw new RequestTimeoutException(`Timeout occurred: ${error.message}`);
    }
  }
}
