import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DataResponseInterceptor } from './global/interceptors/data-response/data-response.interceptor';
import { config as awsConfig } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*
   * Use validation pipes globally
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  /**
   *
   * swagger configuration
   */

  const swaggerConfig = new DocumentBuilder()
    .setVersion('1.0')
    .setTitle('User Management API')
    .setDescription(
      'Use the base API endpoints to manage users and posts at http://localhost:7231',
    )
    .setTermsOfService('https://example.com/terms')
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    )
    .addServer('http://localhost:7231', 'Development Server')
    .addBearerAuth({
      type: 'http',
      name: 'Authorization',
      scheme: '',
      bearerFormat: 'JWT',
    })
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  // setting up aws sdk
  const configService = app.get(ConfigService);

  awsConfig.update({
    credentials: {
      accessKeyId: configService.get('awsConfig.AWS_IAM_ACCESS_KEY'),
      secretAccessKey: configService.get('awsConfig.AWS_IAM_SECRET_ACCESS_KEY'),
    },
    region: configService.get('awsConfig.AWS_REGION'),
  });
  // setting up aws sdk

  // Configure CORS with specific options
  app.enableCors({
    origin: ['http://localhost:3500', 'http://localhost:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // global interceptor
  // app.useGlobalInterceptors(new DataResponseInterceptor());

  await app.listen(7231);
}

bootstrap();
