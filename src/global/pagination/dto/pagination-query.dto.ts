import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @ApiPropertyOptional({
    description: 'Number of items to fetch',
    example: 10,
    type: Number,
    default: 10,
    minimum: 1,
  })
  @IsOptional()
  @IsPositive()
  limit?: number = 10;

  @ApiPropertyOptional({
    description: 'Number of page to fetch',
    example: 10,
    type: Number,
    default: 10,
    minimum: 1,
  })
  @IsOptional()
  @IsPositive()
  page?: number = 1;
}
