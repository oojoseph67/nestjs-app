import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

type LoginBody = {
  id: number;
  username: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() loginBody: LoginBody) {
    return this.authService.login(loginBody);
  }
}
