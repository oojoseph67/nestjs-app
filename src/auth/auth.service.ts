import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    // injecting a service dependency (circular dependency injection)
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}

  public login({
    id,
    username,
    password,
  }: {
    id: number;
    username: string;
    password: string;
  }) {
    // check user exists in the database and if the password is correct
    // login
    // token

    // const user = this.userService.findOneById({ id });
    // console.log(`Logging in user ${user.firstName}`);

    // return user;

    return 'login';
  }

  public isAuthenticated() {
    return true; // replace with actual authentication logic
  }
}
