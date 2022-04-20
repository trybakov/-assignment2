
const mongoose = require("mongoose");

//create the database schema 
const bookSchema = mongoose.Schema({
    name: { type: String, unique: true, require: true },
    author: {type: String, unique: true, require: true },
    link: {type: String, unique: true, require: true },
    
});
//create the database model
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

//create the records manually
Book.create(
    {
        name:"The Brothers Karamazov",
        author:"Fyodor Dostoevsky",
        link:"https://www.amazon.com/Brothers-Karamazov-Fyodor-Dostoevsky/dp/0374528373"
    },

    {
        name:"1984",
        author:"George Orwell",
        link:"https://www.amazon.com/1984-George-Orwell/dp/1443434973"
    },

    {
        name:"Brave New World",
        author:"Aldous Huxley",
        link:"https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523"
    },
    //since records are hard coded and everytime we re run the program theere will be duplicate key error 
    //we need to handle the duplicate key errors
    //easiest way is to create a function, and if the error exists, then display message in the console.
    function (error) {
        if (error) console.log("Records already exist in database, ignoring duplicates and continuing.");
    }
);