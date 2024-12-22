import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Tag as TagRepository } from './entity/tags.entity';
import { CreateTagDto } from './dtos/create-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(TagRepository)
    private tagsRepository: Repository<TagRepository>,
  ) {}

  public async createTag({ tag }: { tag: CreateTagDto }) {
    const existingTags = await this.tagsRepository.findOne({
      where: { name: tag.name },
    });

    if (existingTags) {
      throw new HttpException('Tag already exists', HttpStatus.CONFLICT);
    }

    const createdTags = await this.tagsRepository.create(tag);

    await this.tagsRepository.save(createdTags);

    return createdTags;
  }

  public async getAllTags() {
    const tags = await this.tagsRepository.find({});

    return tags;
  }

  public async getTagById({ id }: { id: number }) {
    const tag = await this.tagsRepository.findOneBy({ id });

    if (!tag) {
      throw new HttpException('Tag not found', HttpStatus.NOT_FOUND);
    }

    return tag;
  }

  public async findMultipleTags({ tags }: { tags: number[] }) {
    const results = await this.tagsRepository.find({
      where: {
        id: In(tags),
      },
    });

    return results;
  }

  public async delete({ id }: { id: number }) {
    await this.tagsRepository.delete({ id });

    return { message: 'Tag deleted successfully', status: 'success', id };
  }
}
