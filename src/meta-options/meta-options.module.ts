import { Module } from '@nestjs/common';
import { MetaOptionsService } from './meta-options.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './entity/meta-option.entity';
import { MetaOptionsController } from './meta-options.controller';

@Module({
  providers: [MetaOptionsService],
  controllers: [MetaOptionsController],
  exports: [MetaOptionsService],
  imports: [TypeOrmModule.forFeature([MetaOption])],
})
export class MetaOptionsModule {}
