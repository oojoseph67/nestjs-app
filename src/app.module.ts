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
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/index.config';
import databaseConfig from './config/database.config';
import environmentValidation from './config/environment.validation';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // make sure this is set to true to load environment variables from.env file
      // envFilePath: ['.env.development.local'], // specify the path to your.env file
      envFilePath: !ENV ? '.env' : `.env.${ENV}.local`,
      load: [appConfig, databaseConfig],
      validationSchema: environmentValidation,
    }), // to use environment variables
    UserModule,
    PostsModule,
    AuthModule,
    MetaOptionsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // specify any additional imports here, e.g., TypeORM migrations or custom repositories
      inject: [ConfigService], // inject
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('database.port'),
        // port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: ['dist/**/*.entity.js'],
        synchronize: configService.get('database.synchronize'), // set to false in production
        // autoLoadEntities: true, // using this would require us to create a module (controller and module file) for every entity we want to add, exporting it and using the TypeORM.forFeature([]) function
      }),
    }),
    TagsModule,
  ],
  controllers: [
    AppController,
    PostsController,
    MetaOptionsController,
    TagsController,
  ],
  providers: [AppService],
})
export class AppModule {}
