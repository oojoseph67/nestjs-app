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

@Module({
  imports: [
    UserModule,
    PostsModule,
    AuthModule,
    MetaOptionsModule,
    TypeOrmModule.forRootAsync({
      imports: [], // specify any additional imports here, e.g., TypeORM migrations or custom repositories
      inject: [], // inject
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'oojoseph',
        database: 'blog-app',
        entities: ['dist/**/*.entity.js'],
        synchronize: true, // set to false in production
        // autoLoadEntities: true, // using this would require us to create a module (controller and module file) for every entity we want to add, exporting it and using the TypeORM.forFeature([]) function
      }),
    }),
  ],
  controllers: [AppController, PostsController, MetaOptionsController],
  providers: [AppService],
})
export class AppModule {}
