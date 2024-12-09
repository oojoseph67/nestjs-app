import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UserModule, PostsModule],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
