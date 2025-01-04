import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { GoogleTokenDto } from './dtos/google-token.dto';
import { Auth, AuthType } from '../decorators/auth.decorator';
import { GoogleAuthenticationService } from './google-authentication.service';

@Controller('google-authentication')
export class GoogleAuthenticationController {
  constructor(
    private googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @Auth(AuthType.NONE)
  @HttpCode(HttpStatus.OK)
  @Post('')
  googleAuthentication(@Body() body: GoogleTokenDto) {
    return this.googleAuthenticationService.authenticate({ token: body });
  }
}
