import { BookRepository } from "../repositories/bookRepository";
import { IBook, IBookCreate, IBookUpdate } from "../models/interfaces/book";

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  async getAllBooks(): Promise<IBook[]> {
    return this.bookRepository.findAll();
  }

  async getBookById(id: string): Promise<IBook | null> {
    return this.bookRepository.findById(id);
  }

  async createBook(bookData: IBookCreate): Promise<IBook> {
    return this.bookRepository.create(bookData);
  }

  async updateBook(id: string, bookData: IBookUpdate): Promise<IBook> {
    return this.bookRepository.update(id, bookData);
  }

  async deleteBook(id: string): Promise<IBook> {
    return this.bookRepository.delete(id);
  }
}
