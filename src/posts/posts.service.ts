import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption as MetaOptionRepository } from 'src/meta-options/entity/meta-option.entity';
import { Post as PostRepository } from './entity/post.entity';
import { TagsService } from 'src/tags/tags.service';

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

  public async getAllPosts({ userId }: { userId: number }) {
    const posts = await this.postRepository.find({});

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
