import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
// import { PartialType } from '@nestjs/mapped-types'; 
// we are using the import from swagger so it shows up in our documentation, it still works likes expected as the import from @nestjs/mapped-types

export class PatchPostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'Update post with a specific id',
    example: 123,
    type: 'number',
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
