import { Injectable } from '@nestjs/common';
import { CreateMetaOptionsDto } from './dtos/create-meta-options.dto';
import { MetaOption as MetaOptionsRepository } from './entity/meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    // injecting meta options service repository dependency
    @InjectRepository(MetaOptionsRepository)
    private metaOptionsRepository: Repository<MetaOptionsRepository>,
  ) {}

  public async create({ metaOptions }: { metaOptions: CreateMetaOptionsDto }) {
    const createdMetaOption =
      await this.metaOptionsRepository.create(metaOptions);
    await this.metaOptionsRepository.save(createdMetaOption);

    return createdMetaOption;
  }
}
