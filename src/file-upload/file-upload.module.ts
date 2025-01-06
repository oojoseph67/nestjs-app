import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { UploadToAwsProvider } from './providers/upload-to-aws.provider';
import { ConfigModule } from '@nestjs/config';
import awsConfig from 'src/config/aws.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upload } from './entity/upload.entity';

@Module({
  imports: [
    ConfigModule.forFeature(awsConfig),
    TypeOrmModule.forFeature([Upload]),
  ],
  providers: [FileUploadService, UploadToAwsProvider],
  controllers: [FileUploadController],
})
export class FileUploadModule {}
