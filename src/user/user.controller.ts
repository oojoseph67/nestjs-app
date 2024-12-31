import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateManyUsersDto } from './dtos/create-many-user.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { Auth, AuthType } from 'src/auth/decorators/auth.decorator';

@Controller('users')
@ApiTags('Users') // with the updated version of @nestjs/swagger there is no need to use @ApiTags
export class UserController {
  /**
   * Final Endpoint - /users/id?limit=10&page=1
   * Parama id - optional, convert to integer, cannot have a default value
   * Query limit - integer, default 10
   * Query page - integer, default value 1
   * ==> USE CASES
   * /users/ -> return all users with default pagination
   * /users/1223 -> returns one user whos id is 1234
   * /users?limit=10&page=2 -> return page 2 with limit of pagination 10
   */

  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Get all users',
    description: 'Get all users with optional pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'All users',
    type: CreateUserDto,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Limit the number of returned results',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'The position of the number that you want the api to return',
    example: 1,
  })
  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    // console.log(getUserParamDto);
    // console.log(`Limit: ${limit}, Page: ${page}`);

    const findAll = this.userService.findAll({
      page,
      limit,
      userParamsDTO: getUserParamDto,
    });

    return findAll;
  }

  @ApiOperation({
    summary: 'Create a new user',
    description: 'Create a new user for the application',
  })
  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    const createUser = this.userService.createUser({ user: createUserDto });
    return createUser;
  }

  @ApiOperation({
    summary: 'Create users',
    description: 'Create multiple users',
  })
  // @UseGuards(AccessTokenGuard)
  @Auth(AuthType.BEARER)
  @Post('/create-many')
  public createManyUsers(@Body() createUsersDto: CreateManyUsersDto) {
    console.log('hitting it')
    // const createUsers = this.userService.createMany({ users: createUsersDto });
    // return createUsers;
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
    // return 'You sent a patch request to users endpoint';
  }
}
