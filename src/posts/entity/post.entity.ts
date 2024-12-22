import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostStatus, PostTypes } from '../enums/posts.enums';
import { MetaOption } from '../../meta-options/entity/meta-option.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    nullable: false,
    enum: PostTypes,
    default: PostTypes.POST,
  })
  postType: PostTypes;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    nullable: false,
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  status: PostStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  publishedOn: Date;

  tags?: string[];

  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    // cascade: ['remove'] // setting cascade to work for a few methods
    cascade: true, // this enables us create data in the metaoption table by just passing the value
    eager: true, // loading the metaOptions eagerly instead of lazy loading it
  })
  // @JoinColumn()
  metaOptions?: MetaOption;

  // metaOptions?: CreatePostDtoWithMeta[];
}
