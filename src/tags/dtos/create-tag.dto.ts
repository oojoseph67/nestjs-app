import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsJSON,
  IsLowercase,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTagDto {
  @ApiProperty({
    description: 'Name of the tag',
    example: 'TypeScript',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  name: string;

  @ApiProperty({
    description: 'This is the main content of the post',
    example: 'Welcome to my blog',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(512)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'Slug should be composed only of lowercase alphanumeric characters and hyphens. For example: my-first-post',
  })
  slug: string;

  @ApiPropertyOptional({
    description: 'Tag Description',
    example: 'A modern programming language',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({})
  @IsJSON()
  @IsOptional()
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
  @Matches(/^https?:\/\/[^\s]+$/, {
    message: 'Invalid URL format',
  })
  featuredImageUrl?: string;
}
