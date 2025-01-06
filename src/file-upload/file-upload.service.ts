import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UploadToAwsProvider } from './providers/upload-to-aws.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { FileTypes, Upload } from './entity/upload.entity';
import { Repository } from 'typeorm';
import awsConfig from 'src/config/aws.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class FileUploadService {
  constructor(
    // provider
    private uploadToAwsProvider: UploadToAwsProvider,

    // upload repository injection
    @InjectRepository(Upload)
    private uploadRepository: Repository<Upload>,

    @Inject(awsConfig.KEY)
    private awsConfiguration: ConfigType<typeof awsConfig>,
  ) {}

  public async uploadFile({ file }: { file: Express.Multer.File }) {
    try {
      const allowedMimeTypes = [
        'image/jpeg',
        'image/gif',
        'image/png',
        'image/jpg',
      ];
      if (!allowedMimeTypes.includes(file.mimetype)) {
        throw new BadRequestException(
          'Upload a file of type jpg, jpeg, gif, or png',
        );
      }

      // upload the file to aws (any server of our choice)
      const awsKey = await this.uploadToAwsProvider.awsFileUpload({ file });
      console.log('File uploaded to AWS:', awsKey);

      // save the file info to database
      const upload = this.uploadRepository.create({
        filename: awsKey,
        path: `${this.awsConfiguration.awsCloudfrontUrl}/${awsKey}`,
        type: FileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      });

      // generate to a new entry in database
      return await this.uploadRepository.save(upload);
    } catch (error: any) {
      throw new ConflictException(error.message);
    }
  }
}
