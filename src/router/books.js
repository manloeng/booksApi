const booksRouter = require("express").Router();
const getBooks = require("../controller/books/getBooks");
const { methodNotAllowed } = require("../error");

booksRouter.route("/").get(getBooks).all(methodNotAllowed);

module.exports = booksRouter;
