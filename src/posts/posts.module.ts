import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post as PostEntity } from './entity/post.entity';
import { MetaOption } from 'src/meta-options/entity/meta-option.entity';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([PostEntity, MetaOption])],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
