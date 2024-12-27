import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class PaginationService {
  public async paginateQuery<T extends ObjectLiteral>({
    paginationQuery,
    repository,
  }: {
    paginationQuery: PaginationQueryDto;
    repository: Repository<T>;
  }) {
    const { limit, page } = paginationQuery;

    const query = await repository.find({
      skip: (page - 1) * limit,
      take: limit,
    });

    return query;
  }
}
