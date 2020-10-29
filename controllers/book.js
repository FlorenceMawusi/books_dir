const booksRouter = require("express").Router();
const books = require("../books.json");

booksRouter.get("/", (req, res) => {
  res.send(books);
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

booksRouter.get("/:bookid", (req, res) => {
  const id = req.params.bookid;
  if (id) {
    const single_book = books[id - 1];
    if (single_book) {
      res.status(200).send(single_book);
    } else {
      res.status(404).send({ message: "Sorry, book not found" });
    }
  } else {
    res.status(400).send({ message: "Please enter an id." });
  }
});

booksRouter.delete("/:bookid", (req, res) => {
  const id = req.params.bookid;
  //fix problem on unavailable id
  if (id) {
    const deleted_book = books.splice(id - 1, 1);
    if (deleted_book) {
      res.status(200).send(deleted_book);
    } else {
      res.status(404).send({ message: "Sorry, book not found" });
    }
  } else {
    res.status(400).send({ message: "Please enter an id." });
  }
});



module.exports = booksRouter;
