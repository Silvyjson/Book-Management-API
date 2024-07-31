"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var bookSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true
  },
  ISBN: {
    type: String,
    required: true,
    unique: true
  },
  coverImageUrl: {
    type: String
  }
});
var BookModel = (0, _mongoose.model)('Book', bookSchema);
var _default = exports["default"] = BookModel;