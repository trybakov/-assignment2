
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

    function err(error) {
        if (error.code === 11000) {
        console.log('Records already exist in database');
        }
    }
);
