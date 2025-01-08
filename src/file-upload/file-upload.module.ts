import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { UploadToAwsProvider } from './providers/upload-to-aws.provider';
import { ConfigModule } from '@nestjs/config';
import awsConfig from 'src/config/aws.config';
import { MongooseModule } from '@nestjs/mongoose';
import { Upload, UploadSchema } from './schema/upload.schema';

@Module({
  imports: [
    ConfigModule.forFeature(awsConfig),
    MongooseModule.forFeature([
      {
        name: Upload.name,
        schema: UploadSchema,
      },
    ]),
  ],
  providers: [FileUploadService, UploadToAwsProvider],
  controllers: [FileUploadController],
})
export class FileUploadModule {}
