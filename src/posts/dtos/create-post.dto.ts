import {
  IsArray,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostStatus, PostTypes } from '../enums/posts.enums';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateMetaOptionsDto } from 'src/meta-options/dtos/create-meta-options.dto';

export class CreatePostDto {
  @ApiProperty({
    description: 'This is a title of the post',
    example: 'Hello World',
    type: 'string',

    // default: "Hello World"
  }) // this adds the value to the post documentation
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: PostTypes,
    description:
      "Possible tags for a post, range: ['post', 'page', 'story', 'series']",
    type: 'string',
  })
  @IsString()
  //   @IsEnum(['post', 'page', 'story', 'series'])
  @IsEnum(PostTypes)
  @IsNotEmpty()
  postType: PostTypes;

  @ApiProperty({
    description: 'This is the main content of the post',
    example: 'Welcome to my blog',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'Slug should be composed only of lowercase alphanumeric characters and hyphens. For example: my-first-post',
  })
  slug: string;

  @ApiProperty({
    enum: PostStatus,
    description:
      "Possible status for a post, range: ['draft', 'scheduled', 'review', 'published']",
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(PostStatus)
  status: PostStatus;

  @ApiPropertyOptional({
    description: 'This is the content of the post',
    example: 'Welcome to my blog',
    type: 'string',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description:
      'This is the excerpt of the post. Serialize your json content or else there will be an error',
    example:
      '{\r\n \"@context\": \"https:\/\/schema.org\", \r\n \"@type\": \"Person\"\r\n}',
    format: 'json',
    type: 'string',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'This is the featured image URL',
    example: 'https://example.com/image.jpg',
    format: 'url',
    type: 'string',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiProperty({
    description: 'This is the date when the post was published',
    example: '2022-01-01T12:00:00Z',
    format: 'date-time',
    type: 'string',
  })
  @IsISO8601()
  @IsNotEmpty()
  publishedOn: Date;

  @ApiPropertyOptional({
    description: 'This is the author of the post',
    example: ['author', 'blog'],
    type: 'array',
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // validate each item in the array as a string
  tags?: string[];

  @ApiPropertyOptional({
    description: 'This is the additional options for the post',
    example: '{"sidebarEnabled": true, "footerEnabled": true}',
    type: 'string',
    required: false,
    items: {
      type: 'object',
      properties: {
        metaValue: {
          type: 'json',
          description: 'The meta value is a json object',
          example: '{"sidebarEnabled": true, "footerEnabled": true}',
        },
      },
      required: ['key', 'value'],
    },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateMetaOptionsDto)
  metaOptions?: CreateMetaOptionsDto | null;

  @ApiProperty({
    description: 'This is the id of the author of the post',
    example: 123,
    type: 'integer',
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  authorId: number;
}
