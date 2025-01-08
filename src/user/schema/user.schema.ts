import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({
    type: String,
    required: true,
  })
  firstName: string;

  @Prop({
    type: String,
    default: '',
    required: false,
  })
  lastName?: string;

  @Prop({
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: 'Please enter a valid email address',
    },
  })
  email: string;

  @Prop({
    type: String,
    required: true,
    // select: false, // this field will not be returned when fetching users
  })
  password: string;

  @Prop({
    type: String,
    default: '',
    required: false,
  })
  googleId?: string;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
