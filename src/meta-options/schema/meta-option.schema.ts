import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Post } from 'src/posts/schema/post.schema';

@Schema({ timestamps: true })
export class MetaOption extends Document {
  @Prop({
    type: Object,  // or Mixed if you prefer
    required: true,
  })
  metaValue: Record<string, any>;

  @Prop({
    type: Types.ObjectId,
    ref: 'Post',
    required: true,
  })
  post: Types.ObjectId | Post;
}

export const MetaOptionSchema = SchemaFactory.createForClass(MetaOption); 