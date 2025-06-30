import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { BookController } from "../../controllers/bookController";

const bookController = new BookController();

export async function deleteBook(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  return bookController.deleteBook(request, context);
}

app.http("deleteBook", {
  methods: ["DELETE"],
  authLevel: "anonymous",
  route: "books/{id}",
  handler: deleteBook,
});
