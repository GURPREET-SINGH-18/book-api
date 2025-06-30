import {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { BookService } from "../services/bookService";
import { IBookCreate, IBookUpdate } from "../models/interfaces/book";
import { errorHandler } from "../utils/errorHandler";

export class BookController {
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  async getBooks(
    request: HttpRequest,
    context: InvocationContext
  ): Promise<HttpResponseInit> {
    try {
      const books = await this.bookService.getAllBooks();
      //get book by author
      //get book by title
      // get book by isbn
      return { jsonBody: books };
    } catch (error) {
      return errorHandler(error);
    }
  }

  async getBook(
    request: HttpRequest,
    context: InvocationContext
  ): Promise<HttpResponseInit> {
    try {
      const id = request.params.id;
      const book = await this.bookService.getBookById(id);

      if (!book) {
        return { status: 404, jsonBody: { message: "Book not found" } };
      }

      return { jsonBody: book };
    } catch (error) {
      return errorHandler(error);
    }
  }

  async createBook(
    request: HttpRequest,
    context: InvocationContext
  ): Promise<HttpResponseInit> {
    try {
      const body = await request.json();
      const bookData = this.validateBookCreate(body);
      const newBook = await this.bookService.createBook(bookData);
      return { status: 201, jsonBody: newBook };
    } catch (error) {
      return errorHandler(error);
    }
  }

  async updateBook(
    request: HttpRequest,
    context: InvocationContext
  ): Promise<HttpResponseInit> {
    try {
      const id = request.params.id;
      const body = await request.json();
      const bookData = this.validateBookUpdate(body);
      const updatedBook = await this.bookService.updateBook(id, bookData);
      return { jsonBody: updatedBook };
    } catch (error) {
      return errorHandler(error);
    }
  }

  async deleteBook(
    request: HttpRequest,
    context: InvocationContext
  ): Promise<HttpResponseInit> {
    try {
      const id = request.params.id;
      const deletedBook = await this.bookService.deleteBook(id);
      return { jsonBody: deletedBook };
    } catch (error) {
      return errorHandler(error);
    }
  }

  private validateBookCreate(body: unknown): IBookCreate {
    if (typeof body !== "object" || body === null) {
      throw new Error("Invalid request body");
    }

    const { title, author, isbn, publishedAt } = body as Record<
      string,
      unknown
    >;

    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      typeof isbn !== "string" ||
      !this.isValidDate(publishedAt)
    ) {
      throw new Error("Invalid book data");
    }

    return {
      title,
      author,
      isbn,
      publishedAt: new Date(publishedAt as string),
    };
  }

  private validateBookUpdate(body: unknown): IBookUpdate {
    if (typeof body !== "object" || body === null) {
      throw new Error("Invalid request body");
    }

    const { title, author, isbn, publishedAt } = body as Record<
      string,
      unknown
    >;
    const result: IBookUpdate = {};

    if (title !== undefined) {
      if (typeof title !== "string") throw new Error("Title must be a string");
      result.title = title;
    }

    if (author !== undefined) {
      if (typeof author !== "string")
        throw new Error("Author must be a string");
      result.author = author;
    }

    if (isbn !== undefined) {
      if (typeof isbn !== "string") throw new Error("ISBN must be a string");
      result.isbn = isbn;
    }

    if (publishedAt !== undefined) {
      if (!this.isValidDate(publishedAt)) {
        throw new Error("Invalid publishedAt date");
      }
      result.publishedAt = new Date(publishedAt as string);
    }

    return result;
  }

  private isValidDate(date: unknown): boolean {
    if (date instanceof Date) return true;
    if (typeof date !== "string") return false;
    return !isNaN(Date.parse(date));
  }
}
