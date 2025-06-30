import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { BookController } from "../../controllers/bookController";

const bookController = new BookController();

export async function getBooks(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  return bookController.getBooks(request, context);
}

app.http("getBooks", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "books",
  handler: getBooks,
});
