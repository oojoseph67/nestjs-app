import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { HashingProvider } from './providers/hashing.provider';
import { BcryptProvider } from './providers/bcrypt.provider';
import { ConfigModule, ConfigType } from '@nestjs/config';
import jwtConfig from 'src/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    forwardRef(() => UserModule), // for dependency injection (circular dependency injection)
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(jwtConfig)],
      useFactory: async (jwtConfiguration: ConfigType<typeof jwtConfig>) => ({
        secret: jwtConfiguration.jwtSecret,
        signOptions: {
          audience: jwtConfiguration.jwtTokenAudience,
          issuer: jwtConfiguration.jwtTokenIssuer,
          expiresIn: jwtConfiguration.jwtTokenExpiration,
        },
      }),
      inject: [jwtConfig.KEY],
    }),
  ],
  exports: [AuthService, HashingProvider],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
  ],
})
export class AuthModule {}
