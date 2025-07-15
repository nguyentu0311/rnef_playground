export interface Root {
  status?: boolean;
  msg?: string;
  items?: Item[];
  pagination?: Pagination;
}

export const mapToRoot = (data: any): Root => {
  return {
    status: data.status ?? false,
    msg: data.msg ?? '',
    items: data.items ?? [],
    pagination: data.pagination ?? null,
  };
};

export interface Item {
  tmdb?: Tmdb;
  imdb?: Imdb;
  modified?: Modified;
  _id?: string;
  name?: string;
  slug?: string;
  origin_name?: string;
  poster_url?: string;
  thumb_url?: string;
  year?: number;
}

export interface Tmdb {
  type?: string;
  id?: string;
  season?: number;
  vote_average?: number;
  vote_count?: number;
}

export interface Imdb {
  id?: any;
}

export interface Modified {
  time?: string;
}

export interface Pagination {
  totalItems?: number;
  totalItemsPerPage?: number;
  currentPage: number;
  totalPages: number;
}
