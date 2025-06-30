import { IBook } from "./interfaces/book";

export class BookModel implements IBook {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public isbn: string,
    public publishedAt: Date,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
