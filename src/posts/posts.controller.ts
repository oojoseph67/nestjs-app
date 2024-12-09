import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get(':userId')
  getAllPosts(@Param('userId') userId: number) {
    console.log(`Getting posts for user ${userId}`);

    return this.postService.getAllPosts({ userId });
  }
}
