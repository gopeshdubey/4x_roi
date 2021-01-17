const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { db } = require("../db/db");

var user_schema = new Schema([
  {
    id: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
]);

module.exports = db.model("users", user_schema);
