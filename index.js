const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const authorRouter = require("./controllers/author");
const booksRouter = require("./controllers/book");

app.use(bodyParser.json());

// app.use((request, response, next) => {
//   console.log("This is a new request.");
//   console.log("IP", request.ip);
//   console.log("Method", request.method);

//   next();
// });

app.get("/", (req, res) => {
  console.log("hitting home");
  res.send("hello world");
});

app.use("/books", booksRouter);
app.use("/authors", authorRouter);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("The server is up on port " + PORT);
});
