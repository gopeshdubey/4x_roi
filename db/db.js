const mongoose = require("mongoose");

var db = mongoose.createConnection('mongodb+srv://gopesh:gopesh123@cluster0.on5bp.mongodb.net/roi?retryWrites=true&w=majority')

module.exports = { db }
