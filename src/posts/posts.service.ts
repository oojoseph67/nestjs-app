import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption as MetaOptionRepository } from 'src/meta-options/entity/meta-option.entity';
import { Post as PostRepository } from './entity/post.entity';

@Injectable()
export class PostsService {
  constructor(
    // injecting user service (making user of another service (a single dependency injection))
    private userServices: UserService,

    @InjectRepository(PostRepository)
    private postRepository: Repository<PostRepository>,

    @InjectRepository(MetaOptionRepository)
    private metaOptionsRepository: Repository<MetaOptionRepository>,
  ) {}

  public async create({ createPost }: { createPost: CreatePostDto }) {
    let metaOptions = null;
    if (createPost.metaOptions) {
      const metaValue = createPost.metaOptions;
      metaOptions = this.metaOptionsRepository.create(metaValue);

      await this.metaOptionsRepository.save(metaOptions);
    }

    const post = await this.postRepository.create(createPost);

    if (metaOptions) {
      post.metaOptions = metaOptions;
    }

    await this.postRepository.save(post);

    return post;
  }

  public getAllPosts({ userId }: { userId: number }) {
    // checks if a user exists and is authenticated
    // gets the user's posts from a database
    // and returns them

    const user = this.userServices.findOneById({ id: userId });
    console.log(`Getting posts for user ${user.firstName}`);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND, {
        cause: 'User not registered',
        description: 'User was not found in the system database',
      });
    }

    const dummyPost = {
      user,
      title: 'Post Title',
      content: 'Post Content',
    };

    return dummyPost;
  }
}
