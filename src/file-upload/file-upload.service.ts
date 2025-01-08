import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UploadToAwsProvider } from './providers/upload-to-aws.provider';
import awsConfig from 'src/config/aws.config';
import { ConfigType } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { FileTypes, Upload } from './schema/upload.schema';
import { Model } from 'mongoose';

@Injectable()
export class FileUploadService {
  constructor(
    // provider
    private uploadToAwsProvider: UploadToAwsProvider,

    // upload repository injection
    @InjectModel(Upload.name)
    private uploadModel: Model<Upload>,

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
      const upload = new this.uploadModel({
        filename: awsKey,
        path: `${this.awsConfiguration.awsCloudfrontUrl}/${awsKey}`,
        type: FileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      });

      // generate to a new entry in database
      return await upload.save();
    } catch (error: any) {
      throw new ConflictException(error.message);
    }
  }
}
