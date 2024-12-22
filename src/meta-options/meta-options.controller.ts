import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './meta-options.service';
import { CreateMetaOptionsDto } from './dtos/create-meta-options.dto';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private metaOptionsService: MetaOptionsService) {}

  @Post()
  createMetaOptions(@Body() createMetaOptionsDto: CreateMetaOptionsDto) {
    const metaOptions = this.metaOptionsService.create({
      metaOptions: createMetaOptionsDto,
    });

    return metaOptions;
  }
}
