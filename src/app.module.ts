import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOptionsController } from './meta-options/meta-options.controller';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { TagsController } from './tags/tags.controller';
import { TagsModule } from './tags/tags.module';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { PaginationService } from './global/pagination/pagination.service';
import { PaginationModule } from './global/pagination/pagination.module';
import appConfig from './config/index.config';
import databaseConfig from './config/database.config';
import environmentValidation from './config/environment.validation';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AccessTokenGuard } from './auth/guards/access-token/access-token.guard';
import jwtConfig from './config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationGuard } from './auth/guards/authentication/authentication.guard';
import { DataResponseInterceptor } from './global/interceptors/data-response/data-response.interceptor';
import { FileUploadModule } from './file-upload/file-upload.module';
import { MailModule } from './mail/mail.module';
import awsConfig from './config/aws.config';
import { MongooseModule } from '@nestjs/mongoose';

export const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    // env configs
    ConfigModule.forRoot({
      isGlobal: true, // make sure this is set to true to load environment variables from.env file
      // envFilePath: ['.env.development.local'], // specify the path to your.env file
      envFilePath: !ENV ? '.env' : `.env.${ENV}.local`,
      load: [appConfig, databaseConfig, awsConfig],
      validationSchema: environmentValidation,
    }), // to use environment variables
    // env configs

    UserModule,
    PostsModule,
    AuthModule,
    MetaOptionsModule,

    // mongodb connection setup
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),

    // MongooseModule.forRoot('', {
    //   dbName: ''
    // }),

    // jwt configuration
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(jwtConfig)],
      useFactory: async (jwtConfiguration: ConfigType<typeof jwtConfig>) => ({
        secret: jwtConfiguration.jwtSecret,
        signOptions: {
          audience: jwtConfiguration.jwtTokenAudience,
          issuer: jwtConfiguration.jwtTokenIssuer,
          expiresIn: jwtConfiguration.jwtTokenExpiration,
        },
      }),
      inject: [jwtConfig.KEY],
    }),
    // jwt configuration

    TagsModule,
    PaginationModule,
    FileUploadModule,
    MailModule,
  ],
  controllers: [
    AppController,
    PostsController,
    MetaOptionsController,
    TagsController,
  ],
  providers: [
    AppService,
    PaginationService,
    AccessTokenGuard, // because authentication guard has a dependency injection of AccessTokenGuard
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
      // useClass: AccessTokenGuard,
    }, // applying global guard
    {
      provide: APP_INTERCEPTOR,
      useClass: DataResponseInterceptor,
    },
  ],
})
export class AppModule {}
