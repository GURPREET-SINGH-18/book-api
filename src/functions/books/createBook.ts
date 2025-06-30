import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { BookController } from "../../controllers/bookController";

const bookController = new BookController();

export async function createBook(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  return bookController.createBook(request, context);
}

app.http("createBook", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "books",
  handler: createBook,
});
