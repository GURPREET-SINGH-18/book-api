import { HttpResponseInit } from "@azure/functions";

export function errorHandler(error: unknown): HttpResponseInit {
  console.error(error);

  const status =
    error instanceof Error && "statusCode" in error
      ? (error as any).statusCode
      : 500;

  const message =
    error instanceof Error ? error.message : "Internal Server Error";

  const response: HttpResponseInit = {
    status,
    jsonBody: { message },
  };

  if (process.env.NODE_ENV === "development") {
    response.jsonBody = {
      ...response.jsonBody,
      error: error instanceof Error ? error.stack : String(error),
    };
  }

  return response;
}
