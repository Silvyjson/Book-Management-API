"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _book_controller = require("../controllers/book_controller");
var router = (0, _express.Router)();
router.post('/books', _book_controller.handleCreateBook);
router.patch('/books/cover-image/:id', _book_controller.handleUpdateBookCover);
router.get('/books', _book_controller.handleGetAllBooks);
router.get('/books/:id', _book_controller.handleGetSingleBook);
router.put('/books/:id', _book_controller.handleUpdateBook);
router["delete"]('/books/:id', _book_controller.handleDeleteBook);
var _default = exports["default"] = router;