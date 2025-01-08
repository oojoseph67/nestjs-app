import { Module } from '@nestjs/common';
import { MetaOptionsService } from './meta-options.service';
import { MetaOptionsController } from './meta-options.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetaOption, MetaOptionSchema } from './schema/meta-option.schema';

@Module({
  providers: [MetaOptionsService],
  controllers: [MetaOptionsController],
  exports: [MetaOptionsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: MetaOption.name,
        schema: MetaOptionSchema,
      },
    ]),
  ],
})
export class MetaOptionsModule {}
