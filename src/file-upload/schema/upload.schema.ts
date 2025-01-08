import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum FileTypes {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  DOCUMENT = 'document',
  OTHER = 'other',
}

@Schema()
export class Upload extends Document {
  @Prop({
    type: String,
    required: true,
  })
  fileName: string;

  @Prop({
    type: String,
    required: true,
  })
  path: string;

  @Prop({
    type: String,
    required: true,
    enum: FileTypes,
    default: FileTypes.IMAGE,
  })
  type: FileTypes;

  @Prop({
    type: String,
    required: true,
  })
  mime: string; // media types that can be uploaded (.aac or .mp4)

  @Prop({
    type: String,
    required: true,
  })
  size: number;
}

export const UploadSchema = SchemaFactory.createForClass(Upload);
