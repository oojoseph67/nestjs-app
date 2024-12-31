import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signin.dto';
import { Auth, AuthType } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Auth(AuthType.NONE)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginBody: SignInDto) {
    return this.authService.login({ body: loginBody });
  }
}
