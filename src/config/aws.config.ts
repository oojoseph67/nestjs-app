import { registerAs } from '@nestjs/config';

export default registerAs('awsConfig', () => {
  return {
    awsBucketName: process.env.AWS_PUBLIC_BUCKET_NAME,
    awsRegion: process.env.AWS_REGION,
    awsCloudfrontUrl: process.env.AWS_CLOUDFRONT_URL,
    awsAccessKey: process.env.AWS_IAM_ACCESS_KEY,
    awsSecretAccessKey: process.env.AWS_IAM_SECRET_ACCESS_KEY,
  };
});
