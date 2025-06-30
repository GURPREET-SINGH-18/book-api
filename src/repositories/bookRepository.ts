import { prisma } from "../config/prismaClient";
import { IBook, IBookCreate, IBookUpdate } from "../models/interfaces/book";

export class BookRepository {
  async findAll(): Promise<IBook[]> {
    return prisma.book.findMany();
  }

  async findById(id: string): Promise<IBook | null> {
    return prisma.book.findUnique({ where: { id } });
  }

  async create(data: IBookCreate): Promise<IBook> {
    return prisma.book.create({ data });
  }

  async update(id: string, data: IBookUpdate): Promise<IBook> {
    return prisma.book.update({ where: { id }, data });
  }

  async delete(id: string): Promise<IBook> {
    return prisma.book.delete({ where: { id } });
  }
}

/*
MVC Pattern:

- Model: Represents the data structure and business logic (e.g., IBook, IBookCreate, IBookUpdate).

F1->F2->F3
 */
