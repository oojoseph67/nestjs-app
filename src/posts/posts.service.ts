import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  public getAllPosts() {
    return ['Post 1', 'Post 2', 'Post 3'];
  }
}
