import {
  forwardRef,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import googleConfig from 'src/config/google.config';
import { GoogleTokenDto } from './dtos/google-token.dto';
import { UserService } from 'src/user/user.service';
import { GenerateTokenProvider } from '../providers/generate-token.provider';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  constructor(
    // injecting google-config as well as jwt configuration

    @Inject(googleConfig.KEY)
    private googleConfiguration: ConfigType<typeof googleConfig>,

    @Inject(forwardRef(() => UserService)) // circular dependency injection
    private userService: UserService,

    private generateToken: GenerateTokenProvider,
  ) {}

  private oauthClient: OAuth2Client;

  onModuleInit() {
    const clientId = this.googleConfiguration.googleClientId;
    const clientSecret = this.googleConfiguration.googleClientSecret;

    this.oauthClient = new OAuth2Client({
      clientId,
      clientSecret,
      redirectUri: this.googleConfiguration.googleRedirectUri,
    });
  }

  public async authenticate({ token }: { token: GoogleTokenDto }) {
    try {
      // verify token
      const loginTicket = await this.oauthClient.verifyIdToken({
        idToken: token.access_token,
      });

      // extract payload from token
      const payload = loginTicket.getPayload();
      const { sub: googleId, email, given_name, family_name } = payload;

      // find the user in the db (if user exists just return assess token and refresh token)
      const user = await this.userService.findUserByGoogleId({
        googleId: googleId,
      });

      if (user) {
        return this.generateToken.generateTokens({ user });
      }

      // ... otherwise create a new user and then generate tokens
      const newUser = await this.userService.createUser({
        user: {
          email: email,
          firstName: given_name,
          lastName: family_name,
          googleId: googleId,
        },
      });

      return this.generateToken.generateTokens({ user: newUser });
    } catch (error: any) {
      throw new UnauthorizedException(`${error.message}`, {
        cause: error.message,
        description: error,
      });
    }
  }
}
