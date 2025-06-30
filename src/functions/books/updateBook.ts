import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { BookController } from "../../controllers/bookController";

const bookController = new BookController();

export async function updateBook(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  return bookController.updateBook(request, context);
}

app.http("updateBook", {
  methods: ["PUT"],
  authLevel: "anonymous",
  route: "books/{id}",
  handler: updateBook,
});
