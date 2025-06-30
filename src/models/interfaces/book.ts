export interface IBook {
  id?: string;
  title: string;
  author: string;
  isbn: string;
  publishedAt: Date;
}

export interface IBookCreate {
  title: string;
  author: string;
  isbn: string;
  publishedAt: Date;
}

export interface IBookUpdate {
  title?: string;
  author?: string;
  isbn?: string;
  publishedAt?: Date;
}
