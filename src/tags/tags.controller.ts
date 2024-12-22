import { Body, Controller, Post } from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tag.dto';
import { ApiOperation } from '@nestjs/swagger';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post('')
  createPost(@Body() createTag: CreateTagDto) {
    const createdTags = this.tagsService.createTag({ tag: createTag });

    return createdTags;
  }
}
