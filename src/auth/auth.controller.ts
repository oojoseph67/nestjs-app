import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signin.dto';
import { Auth, AuthType } from './decorators/auth.decorator';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Auth(AuthType.NONE)
  @Post('login')
  @HttpCode(HttpStatus.OK) // this force and assign the default success response with status code 200
  login(@Body() loginBody: SignInDto) {
    return this.authService.login({ body: loginBody });
  }

  @Auth(AuthType.BEARER)
  @Post('refresh-token')
  @HttpCode(HttpStatus.OK)
  refreshToken(@Body() token: RefreshTokenDto) {
    return this.authService.refreshTokens({ token });
  }
}
