import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { CreateTagDto } from './dtos/create-tag.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tags } from './schema/tags.schema';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tags.name)
    private tagsModel: Model<Tags>,
  ) {}

  public async createTag({ tag }: { tag: CreateTagDto }) {
    const existingTags = await this.tagsModel.findOne({
      where: { name: tag.name },
    });

    if (existingTags) {
      throw new HttpException('Tag already exists', HttpStatus.CONFLICT);
    }

    const createdTags = new this.tagsModel(tag);

    await createdTags.save();

    return createdTags;
  }

  public async getAllTags() {
    const tags = await this.tagsModel.find({});

    return tags;
  }

  public async getTagById({ id }: { id: number }) {
    const tag = await this.tagsModel.findOne({ id });

    if (!tag) {
      throw new HttpException('Tag not found', HttpStatus.NOT_FOUND);
    }

    return tag;
  }

  public async findMultipleTags({ tags }: { tags: number[] }) {
    const results = await this.tagsModel.find({
      where: {
        id: In(tags),
      },
    });

    return results;
  }

  public async delete({ id }: { id: number }) {
    await this.tagsModel.deleteOne({ id });

    return { message: 'Tag deleted successfully', status: 'success', id };
  }
}
