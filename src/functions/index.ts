// // This file can be empty as we're registering functions in their individual files
// // Or you can centralize registrations here if preferred

// import { app } from "@azure/functions";
// import { getBooks } from "./books/getBooks";
// import { getBook } from "./books/getBook";
// import { createBook } from "./books/createBook";
// import { updateBook } from "./books/updateBook";
// import { deleteBook } from "./books/deleteBook";

// // Optional: If you want to keep all registrations in one place
// app.http("getBooks", {
//   methods: ["GET"],
//   authLevel: "anonymous",
//   route: "books",
//   handler: getBooks,
// });

// app.http("getBook", {
//   methods: ["GET"],
//   authLevel: "anonymous",
//   route: "books/{id}",
//   handler: getBook,
// });

// app.http("createBook", {
//   methods: ["POST"],
//   authLevel: "anonymous",
//   route: "books",
//   handler: createBook,
// });

// app.http("updateBook", {
//   methods: ["PUT"],
//   authLevel: "anonymous",
//   route: "books/{id}",
//   handler: updateBook,
// });

// app.http("deleteBook", {
//   methods: ["DELETE"],
//   authLevel: "anonymous",
//   route: "books/{id}",
//   handler: deleteBook,
// });
