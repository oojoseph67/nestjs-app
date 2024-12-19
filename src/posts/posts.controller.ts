import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get(':userId')
  getAllPosts(@Param('userId') userId: number) {
    console.log(`Getting posts for user ${userId}`);

    return this.postService.getAllPosts({ userId });
  }

  @Post('')
  createPost(@Body() createPostDto: CreatePostDto) {
    console.log({ createPostDto });

    return 'You sent a post request to posts endpoint';
  }
}
