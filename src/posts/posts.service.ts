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
    // let metaOptions = null;
    // if (createPost.metaOptions) {
    //   const metaValue = createPost.metaOptions;
    //   metaOptions = this.metaOptionsRepository.create(metaValue);

    //   await this.metaOptionsRepository.save(metaOptions);
    // }

    const post = await this.postRepository.create(createPost);

    // if (metaOptions) {
    //   post.metaOptions = metaOptions;
    // }

    await this.postRepository.save(post);

    return post;
  }

  public async getAllPosts({ userId }: { userId: number }) {
    const posts = await this.postRepository.find({
      relations: { metaOptions: false },
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
