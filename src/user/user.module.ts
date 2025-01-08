import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CreateUserProvider } from './provider/create-user.provider';
import profileConfig from './config/profile.config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';

@Module({
  imports: [
    forwardRef(() => AuthModule), // for dependency injection (circular dependency injection)
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]), // for repository (entity) injection
    ConfigModule.forFeature(profileConfig),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    CreateUserProvider,
    // {
    //   provide: APP_GUARD,
    //   useClass: AccessTokenGuard
    // }, // setting a guard globally (this protect the entire application, everywhere the userModule is been imported)
  ],
  exports: [UserService],
})
export class UserModule {}
