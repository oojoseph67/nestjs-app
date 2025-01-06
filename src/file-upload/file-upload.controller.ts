import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiHeader, ApiHeaders, ApiOperation } from '@nestjs/swagger';
import { Express } from 'express';
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(
    private readonly fileUploadService: FileUploadService, // inject your FileUploadService here
  ) {}

  // @ApiHeader({ name: 'Content-Type', description: 'multipart/form-data', required: true })
  @ApiHeaders([
    { name: 'Authorization', description: 'Bearer token', required: true },
    {
      name: 'Content-Type',
      description: 'multipart/form-data',
      required: true,
    },
    // { name: 'X-Requested-With', description: 'XMLHttpRequest', required: true },
    // { name: 'Accept', description: 'application/json', required: true },
    // { name: 'Accept-Language', description: 'en-US,en;q=0.8', required: true },
  ])
  @ApiOperation({
    summary: 'Upload a file',
    description: 'Upload a file to the server',
  })
  @UseInterceptors(FileInterceptor('file', {}))
  @Post('')
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileUploadService.uploadFile({ file });
  }
}
