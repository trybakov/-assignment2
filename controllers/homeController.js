const Book = require("../models/book");

exports.sendReqParam = (req, res) => {
    //ensure that url requests redirect to the EJS views.    
    
    if (req.url == "/books/1") {
        //find only one record at a time to display it in the approriate EJS view
        Book.findOne({name:"1984"}, (error, books) => {
            if (books) res.render("book1", {data: books});
        });
    }
    else if (req.url == "/books/2") {
        //find only one record at a time to display it in the approriate EJS view
        Book.findOne({name:"The Brothers Karamazov"}, (error, books) => {
            if (books) res.render("book2", {data: books});
        });
    }
    else if (req.url == "/books/3") {
        //find only one record at a time to display it in the approriate EJS view
        Book.findOne({name:"Brave New World"}, (error, books) => {
            if (books) res.render("book3", {data: books});
        });
    }
}
