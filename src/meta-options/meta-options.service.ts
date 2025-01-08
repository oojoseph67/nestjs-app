import { Injectable } from '@nestjs/common';
import { CreateMetaOptionsDto } from './dtos/create-meta-options.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MetaOption } from './schema/meta-option.schema';
import { Model } from 'mongoose';

@Injectable()
export class MetaOptionsService {
  constructor(
    // injecting meta options service repository dependency
    @InjectModel(MetaOption.name)
    private metaOptionModel: Model<MetaOption>,
  ) {}

  public async create({ metaOptions }: { metaOptions: CreateMetaOptionsDto }) {
    const createdMetaOption = new this.metaOptionModel(metaOptions);
    await createdMetaOption.save();

    return createdMetaOption;
  }
}
