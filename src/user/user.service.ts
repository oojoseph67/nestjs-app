import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    // injecting auth service dependency
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}
  public findAll({
    userParamsDTO,
    limit,
    page,
  }: {
    userParamsDTO: GetUsersParamDto;
    limit: number;
    page: number;
  }) {
    const { id } = userParamsDTO;

    const isAuth = this.authService.isAuthenticated();
    console.log(`User authenticated: ${isAuth}`);

    if (!isAuth) {
      throw new HttpException('User not found', HttpStatus.FORBIDDEN);
    }

    console.log(
      `Find all users with id: ${id}, limit: ${limit}, page: ${page}`,
    );

    return [
      { id: 1, firstName: 'John Doe', email: 'john@doe.com' },
      { id: 2, firstName: 'Jane Doe', email: 'jane@doe.com' },
    ];
  }

  public findOneById({ id }: { id: number }) {
    console.log(`Find user with id: ${id}`);

    const dummyUserData = [
      { id: 1, firstName: 'John Doe', email: 'john@doe.com' },
      { id: 2, firstName: 'Jane Doe', email: 'jane@doe.com' },
    ];

    return dummyUserData.find((user) => user.id === id);
  }
}
