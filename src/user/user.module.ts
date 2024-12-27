import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { ConfigModule } from '@nestjs/config';
import { UserCreateMany } from './user-create-many';
import profileConfig from './config/profile.config';

@Module({
  imports: [
    forwardRef(() => AuthModule), // for dependency injection (circular dependency injection)
    TypeOrmModule.forFeature([User]), // for repository (entity) injection
    ConfigModule.forFeature(profileConfig)
  ],
  controllers: [UserController],
  providers: [UserService, UserCreateMany],
  exports: [UserService],
})
export class UserModule {}
