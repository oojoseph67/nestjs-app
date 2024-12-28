import {
  Injectable,
  Inject,
  forwardRef,
  HttpException,
  HttpStatus,
  RequestTimeoutException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dtos/signin.dto';
import { HashingProvider } from './providers/hashing.provider';

@Injectable()
export class AuthService {
  constructor(
    // injecting a service dependency (circular dependency injection)
    @Inject(forwardRef(() => UserService))
    private userService: UserService,

    // injecting hashing provider
    @Inject(forwardRef(() => HashingProvider)) // doing this because this is a circular dependency
    private hashingProvider: HashingProvider,
  ) {}

  public async login({ body }: { body: SignInDto }) {
    const { email, password } = body;

    const existingUser = await this.userService.findUserByEmail({ email });

    let isPasswordCorrect: boolean;

    try {
      isPasswordCorrect = await this.hashingProvider.comparePasswords({
        hashedPassword: existingUser.password,
        password,
      });
    } catch (error: any) {
      throw new RequestTimeoutException(error.message, {
        cause: error,
        description: 'Request timeout. Could not compare passwords',
      });
    }

    if (!isPasswordCorrect) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return true;
  }

  public isAuthenticated() {
    return true; // replace with actual authentication logic
  }
}
