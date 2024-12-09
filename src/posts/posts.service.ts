import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostsService {
  // injecting user service
  constructor(private userServices: UserService) {}

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
