import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { Repository } from 'typeorm';
import { TagsService } from 'src/tags/tags.service';
import { PatchPostDto } from './dtos/patch-post.dto';
import { GetPostsQueryDto } from './dtos/get-posts.dto';
import { PaginationService } from 'src/global/pagination/pagination.service';
import { Paginated } from 'src/global/pagination/interface/paginated.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    /**
     * Repositories Injections
     */

    // injecting user service (making user of another service (a single dependency injection))
    private userServices: UserService,

    private tagsService: TagsService,

    /**
     * Repositories Injections
     */
    @InjectModel(Post.name)
    private postModel: Model<Post>,

    // injecting pagination service
    private paginationService: PaginationService,
  ) {}

  public async create({
    createPost,
    authorId,
  }: {
    createPost: CreatePostDto;
    authorId: number;
  }) {
    const author = await this.userServices.findOneById({
      id: authorId,
    });

    if (!author) {
      throw new HttpException('Author not found', HttpStatus.NOT_FOUND);
    }

    const tags = await this.tagsService.findMultipleTags({
      tags: createPost.tags,
    });

    if (!tags.length || tags.length === 0) {
      throw new HttpException('Tags not found', HttpStatus.NOT_FOUND, {
        cause: 'Tags not found',
        description: 'Provide a valid tags to create',
      });
    }

    const normalizedSlug = createPost.slug.toLowerCase();
    const existingSlug = await this.postModel.findOne({
      where: {
        slug: normalizedSlug,
      },
    });

    if (existingSlug) {
      throw new HttpException('Slug already exists', HttpStatus.CONFLICT);
    }

    try {
      const post = new this.postModel({
        ...createPost,
        author: author,
        tags: tags,
        slug: normalizedSlug,
      });

      await post.save();

      return post;
    } catch (error: any) {
      throw new HttpException(
        `Error while creating post`,
        HttpStatus.BAD_REQUEST,
        {
          cause: error.message,
          description: String(error),
        },
      );
    }
  }

  public async update({ updatePost }: { updatePost: PatchPostDto }) {
    // find the tags

    const tags = await this.tagsService.findMultipleTags({
      tags: updatePost.tags,
    });

    if (!(tags.length > 0)) {
      throw new HttpException('Tags not found', HttpStatus.NOT_FOUND, {
        cause: 'Tags not found',
        description: 'Provide a valid tags to update',
      });
    }

    const post = await this.postModel.findOne({ id: updatePost.id });

    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    post.title = updatePost.title ?? post.title;
    post.postType = updatePost.postType ?? post.postType;
    post.slug = updatePost.slug ?? post.slug;
    post.status = updatePost.status ?? post.status;
    post.content = updatePost.content ?? post.content;
    post.postSchema = updatePost.postSchema ?? post.postSchema;
    post.featuredImageUrl =
      updatePost.featuredImageUrl ?? post.featuredImageUrl;
    post.publishedOn = updatePost.publishedOn ?? post.publishedOn;
    post.tags = updatePost.tags
      ? tags.map((tag) => tag._id as Types.ObjectId)
      : post.tags;

    const updatedPost = await post.save();

    return updatedPost;
  }

  public async getAllPosts({
    userId,
    queryParams,
  }: {
    userId: number;
    queryParams: GetPostsQueryDto;
  }): Promise<Paginated<Post>> {
    const { endDate, limit, page, startDate } = queryParams;

    const posts = await this.paginationService.paginateQuery({
      paginationQuery: {
        limit,
        page,
      },
      model: this.postModel,
    });

    return posts;
  }

  public async delete({ id }: { id: number }) {
    // const post = await this.postRepository.findOneBy({ id });

    // if (!post) {
    //   throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    // }

    await this.postModel.deleteOne({ id });

    // await this.metaOptionsRepository.delete({ id: post.metaOptions.id });

    return { message: 'Post deleted successfully', status: 'success', id };
  }
}
