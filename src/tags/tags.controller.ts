import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tag.dto';
import { ApiOperation } from '@nestjs/swagger';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @ApiOperation({ summary: 'Create a tag' })
  @Post('')
  createPost(@Body() createTag: CreateTagDto) {
    console.log({ createTag });
    const createdTags = this.tagsService.createTag({ tag: createTag });
    return createdTags;
  }

  @ApiOperation({ summary: 'Delete a tag by id' })
  @Delete('')
  async deleteTag(@Query('id', ParseIntPipe) id: number) {
    return await this.tagsService.delete({ id });
  }
}
