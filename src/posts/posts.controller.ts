import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All posts',
    type: [CreatePostDto],
  })
  @Get(':userId')
  getAllPosts(@Param('userId') userId: number) {
    console.log(`Getting posts for user ${userId}`);

    return this.postService.getAllPosts({ userId });
  }

  @ApiOperation({
    summary: 'Creates a new post',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Created post',
    type: CreatePostDto,
  })
  @Post('')
  createPost(@Body() createPostDto: CreatePostDto) {
    console.log({ createPostDto });

    return 'You sent a post request to posts endpoint';
  }

  @ApiOperation({
    summary: 'Updates a post',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Updated post',
    type: CreatePostDto,
  })
  @Patch('')
  updatePost(@Body() updatePostDto: PatchPostDto) {
    console.log({ updatePostDto });

    return 'You sent a patch request to posts endpoint';
  }
}
