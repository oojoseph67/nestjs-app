import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PostsModule, AuthModule],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
