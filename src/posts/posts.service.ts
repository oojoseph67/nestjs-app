import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption as MetaOptionRepository } from 'src/meta-options/entity/meta-option.entity';
import { Post, Post as PostRepository } from './entity/post.entity';
import { TagsService } from 'src/tags/tags.service';
import { PatchPostDto } from './dtos/patch-post.dto';
import { GetPostsQueryDto } from './dtos/get-posts.dto';
import { PaginationService } from 'src/global/pagination/pagination.service';
import { Paginated } from 'src/global/pagination/interface/paginated.interface';

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
    @InjectRepository(PostRepository)
    private postRepository: Repository<PostRepository>,

    @InjectRepository(MetaOptionRepository)
    private metaOptionsRepository: Repository<MetaOptionRepository>,

    // injecting pagination service
    private paginationService: PaginationService,
  ) {}

  public async create({ createPost }: { createPost: CreatePostDto }) {
    const author = await this.userServices.findOneById({
      id: createPost.authorId,
    });

    const tags = await this.tagsService.findMultipleTags({
      tags: createPost.tags,
    });

    const post = await this.postRepository.create({
      ...createPost,
      author: author,
      tags: tags,
    });

    await this.postRepository.save(post);

    return post;
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

    const post = await this.postRepository.findOneBy({ id: updatePost.id });

    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    post.title = updatePost.title ?? post.title;
    post.postType = updatePost.postType ?? post.postType;
    post.slug = updatePost.slug ?? post.slug;
    post.status = updatePost.status ?? post.status;
    post.content = updatePost.content ?? post.content;
    post.schema = updatePost.schema ?? post.schema;
    post.featuredImageUrl =
      updatePost.featuredImageUrl ?? post.featuredImageUrl;
    post.publishedOn = updatePost.publishedOn ?? post.publishedOn;
    post.tags = updatePost.tags ? tags : post.tags;

    const updatedPost = await this.postRepository.save(post);

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
      repository: this.postRepository,
    });

    return posts;
  }

  public async delete({ id }: { id: number }) {
    // const post = await this.postRepository.findOneBy({ id });

    // if (!post) {
    //   throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    // }

    await this.postRepository.delete({ id });

    // await this.metaOptionsRepository.delete({ id: post.metaOptions.id });

    return { message: 'Post deleted successfully', status: 'success', id };
  }
}
