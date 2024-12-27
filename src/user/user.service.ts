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

    // injecting datasource for typeorm transactions
    private dataSource: DataSource,
  ) {}

  public async createUser({
    user,
  }: {
    user: CreateUserDto;
  }): Promise<CreateUserDto> {
    // check user
    let existingUser = undefined;

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

    // create a new user
    const newUser = await this.userRepository.create(user);
    await this.userRepository.save(newUser);

    return newUser;
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

  public async createMany({ users }: { users: CreateUserDto[] }) {
    // create query runner instance
    const queryRunner = this.dataSource.createQueryRunner();

    // connect query runner to datasource
    await queryRunner.connect();

    // start transaction
    await queryRunner.startTransaction();

    let newUser: User[] = [];
    try {
      // if successful commit the transaction
      for (let user of users) {
        const newUserInstance = queryRunner.manager.create(User, user); // entity and object
        const savedNewUserInstance =
          await queryRunner.manager.save(newUserInstance); // save entity to the database

        newUser.push(savedNewUserInstance); // keeping track of the users we have created
      }

      await queryRunner.commitTransaction();
    } catch (error: any) {
      // if failed rollback transaction
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // release connection
      await queryRunner.release();
    }
  }
}
