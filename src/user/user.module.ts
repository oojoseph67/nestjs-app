import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { UserCreateMany } from './user-create-many';
import { CreateUserProvider } from './provider/create-user.provider';
import profileConfig from './config/profile.config';
import jwtConfig from 'src/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    forwardRef(() => AuthModule), // for dependency injection (circular dependency injection)
    TypeOrmModule.forFeature([User]), // for repository (entity) injection
    ConfigModule.forFeature(profileConfig),
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
  controllers: [UserController],
  providers: [
    UserService,
    UserCreateMany,
    CreateUserProvider,
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard
    }, // setting a guard globally (this protect the entire application, everywhere the userModule is been imported)
  ],
  exports: [UserService],
})
export class UserModule {}
