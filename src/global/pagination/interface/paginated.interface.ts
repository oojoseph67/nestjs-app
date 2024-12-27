export interface Paginated<T> {
  data: T[]; // replace with your actual entity type... it would be generic
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
  };
  links: {
    first: string;
    last: string;
    current: string;
    next: string;
    prev: string;
  };
}
