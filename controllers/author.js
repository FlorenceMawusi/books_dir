const authorRouter = require("express").Router();
const authors = require("../authors.json");

authorRouter.get("/", (req, res) => {
  res.send(authors);
});

authorRouter.post("/", (request, response) => {
  const { name, rating, books, authorId } = request.body;

  if (name && rating && books && authorId) {
    authors.push(request.body);
    response.status(201).send(request.body);
  } else {
    response
      .status(400)
      .send({ message: "One of the parameters may be missing" });
  }
});



module.exports = authorRouter;
