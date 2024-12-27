import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatchPostDto } from './dtos/patch-post.dto';
import { GetPostsQueryDto } from './dtos/get-posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  /**
   * Retrieves all posts for a specific user.
   *
   * This function handles GET requests to fetch all posts associated with a given user ID.
   * It logs the user ID for which posts are being retrieved and then calls the post service
   * to fetch the posts.
   *
   * @param {number} userId - The ID of the user whose posts are to be retrieved.
   * @returns {Promise<CreatePostDto[]>} A promise that resolves to an array of CreatePostDto objects,
   *                                     representing all posts for the specified user.
   */

  @ApiOperation({
    summary: 'Retrieves all posts for a specific user',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All posts',
    type: [CreatePostDto],
  })
  @Get(':userId?')
  getAllPosts(
    @Param('userId') userId: number,
    @Query() postQuery: GetPostsQueryDto,
  ) {
    console.log({ postQuery });

    return this.postService.getAllPosts({ userId, queryParams: postQuery});
  }

  /**
   * Creates a new post.
   *
   * This function handles the creation of a new post by processing the provided CreatePostDto.
   * It logs the received data and returns a confirmation message.
   *
   * @param {CreatePostDto} createPostDto - The data transfer object containing the details of the post to be created.
   * @returns {string} A confirmation message indicating that the post request was received.
   */
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
    const createdPost = this.postService.create({ createPost: createPostDto });
    return createdPost;
  }

  /**
   * Updates an existing post.
   *
   * This function handles PATCH requests to update an existing post using the provided data.
   * It logs the update data received and processes the partial post update through the
   * PatchPostDto data transfer object.
   *
   * @param {PatchPostDto} updatePostDto - The data transfer object containing the fields to be updated.
   * @returns {string} A confirmation message indicating that the patch request was received.
   */
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
    // console.log({updatePostDto})
    const updatedPost = this.postService.update({ updatePost: updatePostDto });
    return updatedPost;
  }

  @ApiOperation({
    summary: 'Deletes a post',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Deleted post',
  })
  @Delete('')
  deletePost(@Query('id', ParseIntPipe) id: number) {
    if (!id) {
      throw new HttpException('No ID Provided', HttpStatus.BAD_REQUEST);
    }

    const deleteRequest = this.postService.delete({ id });

    return deleteRequest;
  }
}
