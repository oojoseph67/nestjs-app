import { Injectable, Inject } from '@nestjs/common';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { ObjectLiteral, Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Paginated } from './interface/paginated.interface';

@Injectable()
export class PaginationService {
  constructor(
    // injecting the request object
    @Inject(REQUEST)
    private readonly request: Request,
  ) {}

  public async paginateQuery<T extends ObjectLiteral>({
    paginationQuery,
    repository,
  }: {
    paginationQuery: PaginationQueryDto;
    repository: Repository<T>;
  }): Promise<Paginated<T>> {
    const { limit, page } = paginationQuery;

    const query = await repository.find({
      skip: (page - 1) * limit,
      take: limit,
    });

    // creating url

    const baseUrl =
      this.request.protocol + '://' + this.request.headers.host + '/';

    const newUrl = new URL(this.request.url, baseUrl);

    const totalItems = await repository.count({});
    const totalPages = Math.ceil(totalItems / limit);
    const nextPage = totalPages === page ? page : page + 1;
    const prevPage = page === 1 ? page : page - 1;

    const finalResponse: Paginated<T> = {
      data: query,
      meta: {
        itemsPerPage: limit,
        totalItems,
        currentPage: page,
        totalPages,
      },
      links: {
        first: `${newUrl.origin}${newUrl.pathname}?page=1&limit=${limit}}`,
        last: `${newUrl.pathname}?page=${totalPages}&limit=${limit}`,
        current: `${newUrl.pathname}?page=${page}&limit=${limit}`,
        next: `${newUrl.pathname}?page=${nextPage}&limit=${limit}`,
        prev: `${newUrl.pathname}?page=${prevPage}&limit=${limit}`,
      },
    };

    console.log({ baseUrl, requestUrl: this.request.url, newUrl });

    return finalResponse;
  }
}
