import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import awsConfig from 'src/config/aws.config';
import * as path from 'path';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class UploadToAwsProvider {
  constructor(
    @Inject(awsConfig.KEY)
    private awsConfiguration: ConfigType<typeof awsConfig>,
  ) {}

  private generateFileName({ file }: { file: Express.Multer.File }) {
    const id = uuid4();
    const filename = file.originalname;
    const extension = path.extname(filename);
    const fileNameWithoutSpace = filename
      .split('.')[0]
      .replace(/\s/g, '')
      .trim();
    const timestamp = new Date().toISOString().replace(/:/g, '-').trim();

    return `${id}-${fileNameWithoutSpace}-${timestamp}${extension}`;
  }

  public async awsFileUpload({ file }: { file: Express.Multer.File }) {
    // this.configService.get('appConfig.awsBucketName')

    const s3 = new S3({
      accessKeyId: this.awsConfiguration.awsAccessKey,
      secretAccessKey: this.awsConfiguration.awsSecretAccessKey,
      region: this.awsConfiguration.awsRegion,
    });

    const params: S3.Types.PutObjectRequest = {
      Bucket: this.awsConfiguration.awsBucketName,
      Key: this.generateFileName({ file }),
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    try {
      const uploadResult = await s3.upload(params).promise();
      console.log({ uploadResult });

      return uploadResult.Key;
    } catch (error: any) {
      throw new HttpException(
        `Failed to upload image: ${error.message}`,
        HttpStatus.BAD_REQUEST,
        {
          cause: error.message,
          description: error.stack,
        },
      );
    }
  }
}
