
const mongoose = require("mongoose");

//create the database schema 
const bookSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    author: { type: String, unique: true, required: true },
    link: { type: String, unique: true, required: true },
    
});
//create the database model
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

function err(error) {
    if (error) console.log("Records already exist in database, ignoring duplicates and continuing.");
}

