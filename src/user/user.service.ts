import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

@Injectable()
export class UserService {
  public findAll({
    userParamsDTO,
    limit,
    page,
  }: {
    userParamsDTO: GetUsersParamDto;
    limit: number;
    page: number;
  }) {
    const { id } = userParamsDTO;

    console.log(
      `Find all users with id: ${id}, limit: ${limit}, page: ${page}`,
    );

    return [
      { id: 1, firstName: 'John Doe', email: 'john@doe.com' },
      { id: 2, firstName: 'Jane Doe', email: 'jane@doe.com' },
    ];
  }

  public findOneById({ id }: { id: number }) {
    console.log(`Find user with id: ${id}`);

    const dummyUserData = [
      { id: 1, firstName: 'John Doe', email: 'john@doe.com' },
      { id: 2, firstName: 'Jane Doe', email: 'jane@doe.com' },
    ];

    return dummyUserData.find((user) => user.id === id);
  }
}
