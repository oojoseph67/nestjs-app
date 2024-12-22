import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostStatus, PostTypes } from '../enums/posts.enums';
import { MetaOption } from '../../meta-options/entity/meta-option.entity';
import { User } from 'src/user/entity/user.entity';
import { Tag } from 'src/tags/entity/tags.entity';

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

  @ManyToMany(() => Tag, {
    eager: true,
  })
  @JoinTable() // this must be on the owning side of the relationship and join table is used for M2M relationships, it also creates a new table for the relationship
  tags?: Tag[];

  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    // cascade: ['remove'] // setting cascade to work for a few methods
    cascade: true, // this enables us create data in the metaoption table by just passing the value
    eager: true, // loading the metaOptions eagerly instead of lazy loading it
  })
  // @JoinColumn()
  metaOptions?: MetaOption;

  // metaOptions?: CreatePostDtoWithMeta[];

  @ManyToOne(() => User, (user) => user.posts, {
    eager: true,
  })
  author: User;
}
