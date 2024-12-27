import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entity/user.entity';

export class CreateManyUsersDto {
  @ApiProperty({
    description: 'Array of users to be created',
    type: [CreateUserDto],
    required: true,
    isArray: true,
    items: {
      type: 'User',
    },
    example: [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        password: 'nestjsIS6@awesome',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@doe.com',
        password: 'nestjsIS6@awesome',
      },
    ],
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  users: CreateUserDto[];
}
