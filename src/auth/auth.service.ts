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
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from 'src/config/jwt.config';
import { UserPayload } from './guards/access-token/access-token.guard';

@Injectable()
export class AuthService {
  constructor(
    // injecting a service dependency (circular dependency injection)
    @Inject(forwardRef(() => UserService))
    private userService: UserService,

    // injecting hashing provider
    @Inject(forwardRef(() => HashingProvider)) // doing this because this is a circular dependency
    private hashingProvider: HashingProvider,

    // injecting jwt service dependency
    private jwtService: JwtService,

    // injecting jwtConfig (environment values)
    @Inject(jwtConfig.KEY)
    private jwtConfiguration: ConfigType<typeof jwtConfig>,
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

    const accessToken = await this.jwtService.signAsync(
      {
        sub: existingUser.id,
        email: existingUser.email,
      } as {
        sub: number;
        email: string;
      },
      {
        expiresIn: this.jwtConfiguration.jwtTokenExpiration,
        secret: this.jwtConfiguration.jwtSecret,
        audience: this.jwtConfiguration.jwtTokenAudience,
        issuer: this.jwtConfiguration.jwtTokenIssuer,
      },
    );

    return {
      accessToken,
    };
  }

  public isAuthenticated() {
    return true; // replace with actual authentication logic
  }
}
