const booksRouter = require("express").Router();
const books = require("../books.json");

booksRouter.get("/", (req, res) => {
  console.log(books);
  res.send(books);
});

booksRouter.get("/bookid", (req, res) => {
  const reqBody = request.body;
  if (reqBody.title) {
    const single_book = books.filter((eachBook) => {
      return eachBook.title === reqBody.title;
    });

    if (single_book) {
      res.status(200).send(single_book);
    } else {
      res.status(404).send({ message: "Sorry, book not found" });
    }
  } else {
    res
      .status(400)
      .send({ message: "Title parameter is missing or mispelled." });
  }
});

booksRouter.post("/", (request, response) => {
  const requestBody = request.body;
  if (
    requestBody.title &&
    requestBody.author &&
    requestBody.number_of_pages &&
    requestBody.category &&
    requestBody.rating
  ) {
    console.log("body", request.body);
    books.push(requestBody);
    response.status(201).send(requestBody);
  } else {
    response
      .status(400)
      .send({ message: "One of the parameters are missing or mispelled" });
  }
});

booksRouter.delete("/bookid", (req, res) => {});

module.exports = booksRouter;
