import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tags extends Document {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
      },
      message:
        'Slug should be composed only of lowercase alphanumeric characters and hyphens. For example: my-first-post',
    },
  })
  slug: string;

  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: String,
    required: true,
  })
  tagSchema?: string;

  @Prop({
    type: String,
    required: true,
  })
  featuredImageUrl?: string;
}

export const TagsSchema = SchemaFactory.createForClass(Tags);
