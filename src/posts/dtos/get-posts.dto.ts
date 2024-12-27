import { IsDate, IsOptional } from 'class-validator';
import { IntersectionType } from '@nestjs/swagger'; // importing from swagger so i get automatic documentation
import { PaginationQueryDto } from 'src/global/pagination/dto/pagination-query.dto';

class GetPostsBaseDto {
  @IsDate()
  @IsOptional()
  startDate?: Date;

  @IsDate()
  @IsOptional()
  endDate?: Date;
}

export class GetPostsQueryDto extends IntersectionType(
  GetPostsBaseDto,
  PaginationQueryDto,
) {}
