import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { BookController } from "../../controllers/bookController";

const bookController = new BookController();

export async function getBook(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  return bookController.getBook(request, context);
}

app.http("getBook", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "books/{id}",
  handler: getBook,
});
