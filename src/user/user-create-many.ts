import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateManyUsersDto } from './dtos/create-many-user.dto';

@Injectable()
export class UserCreateMany {
  constructor(
    // injecting datasource for typeorm transactions
    private dataSource: DataSource,
  ) {}

  public async createMany({ users }: { users: CreateManyUsersDto }) {
    // create query runner instance
    const queryRunner = this.dataSource.createQueryRunner();

    // connect query runner to datasource
    try {
      await queryRunner.connect();
    } catch (error: any) {
      throw new HttpException(
        'Database connection failed',
        HttpStatus.REQUEST_TIMEOUT,
        {
          cause: error.message,
          description: String(error),
        },
      );
    }

    // start transaction
    try {
      await queryRunner.startTransaction();
    } catch (error: any) {
      throw new HttpException(
        'Failed to start QueryRunner Transaction',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error.message,
          description: String(error),
        },
      );
    }

    let newUser: User[] = [];
    try {
      // if successful commit the transaction
      for (let user of users.users) {
        const newUserInstance = queryRunner.manager.create(User, user); // entity and object
        const savedNewUserInstance =
          await queryRunner.manager.save(newUserInstance); // save entity to the database

        newUser.push(savedNewUserInstance); // keeping track of the users we have created
      }

      await queryRunner.commitTransaction();
    } catch (error: any) {
      // if failed rollback transaction
      await queryRunner.rollbackTransaction();

      throw new HttpException('Transaction Failed', HttpStatus.BAD_REQUEST, {
        cause: error.message,
        description: String(error),
      });
    } finally {
      // release connection
      try {
        await queryRunner.release();
      } catch (error: any) {
        throw new HttpException(
          'Failed to release QueryRunner connection',
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: error.message,
            description: String(error),
          },
        );
      }
    }

    return newUser;
  }
}
