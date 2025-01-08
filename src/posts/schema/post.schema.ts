import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PostStatus, PostTypes } from '../enums/posts.enums';
import mongoose from 'mongoose';
import { User } from 'src/user/schema/user.schema';
import { Tags } from 'src/tags/schema/tags.schema';

@Schema()
export class Post extends Document {
  @Prop({
    type: String,
    required: true,
  })
  title: string;

  @Prop({
    type: String,
    required: true,
    enum: PostTypes,
    default: PostTypes.POST,
  })
  postType: PostTypes;

  @Prop({
    type: String,
    required: true,
  })
  slug: string;

  @Prop({
    type: String,
    required: true,
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  status: PostStatus;

  @Prop({
    type: String,
    required: false,
  })
  content?: string;

  @Prop({
    type: String,
    required: false,
  })
  postSchema?: string;

  @Prop({
    type: String,
    required: false,
  })
  featuredImageUrl?: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Tags.name,
      },
    ],
    required: false,
    default: [],
  })
  tags?: mongoose.Types.ObjectId[];

  @Prop({
    type: Date,
    required: true,
  })
  publishedOn: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  author: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
