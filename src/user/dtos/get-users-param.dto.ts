import { IsInt, IsOptional } from 'class-validator';

import { Type } from 'class-transformer';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: 'Get user with a specific id',
    example: 123,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number) // transform string to number if provided
  id?: number;
}
