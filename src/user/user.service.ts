import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { ConfigService } from '@nestjs/config';

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
  ) {}

  public async createUser({
    user,
  }: {
    user: CreateUserDto;
  }): Promise<CreateUserDto> {
    // check user
    const existingUser = await this.userRepository.findOne({
      where: { email: user.email },
    });

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

    const environment = this.configService.get<string>('S3_BUCKET')
    console.log(`Environment: ${environment}`);

    console.log("NODE_ENV: ", process.env.NODE_ENV)

    const { id } = userParamsDTO;

    const isAuth = this.authService.isAuthenticated();
    // console.log(`User authenticated: ${isAuth}`);

    if (!isAuth) {
      throw new HttpException('User not found', HttpStatus.FORBIDDEN);
    }

    // console.log(
    //   `Find all users with id: ${id}, limit: ${limit}, page: ${page}`,
    // );

    return [
      { id: 1, firstName: 'John Doe', email: 'john@doe.com' },
      { id: 2, firstName: 'Jane Doe', email: 'jane@doe.com' },
    ];
  }

  public async findOneById({ id }: { id: number }) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
