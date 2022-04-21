const Book = require("../models/book");

module.exports = {
    index: (req, res) => {
        Book.find({})
        .then(book => {
            res.render("home", { data: book });
        })
        .catch(error => {
            console.log(`Error fetching books: ${error.message}`)
            res.redirect("/home");
        });
    },
    new: (req, res) => {
        res.render("AddNewBook");
    },
    create: (req, res, next) => {
        let bookParams = {
            name:req.body.name,
            author:req.body.author,
            link:req.body.link
        };
        Book.create(bookParams)
        .then(book => {
            res.locals.redirect = "/home";
            res.locals.books = book;
            next();
        })
        .catch(error => {
            console.log(`Error saving book: ${error.message}`);
            next(error);
        });
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },
    
    show: (req,res, next) => {
        let bookId = req.params.id;
        Book.findById(bookId)
            .then(book => {
                res.render("books", {
                    data: book
                })            
            })
            .catch(error => {
                console.log(`error fetching book by name: ${error.message}`);
                next(error);
            });
    },
   
    delete: (req, res, next) => {
        let book = req.params.name;
        Book.findOneAndDelete({name:book})
    .then(() => {
            res.locals.redirect = "/home";
            next();
        })
        .catch(error => {
            console.log(`Error deleting book by Book Name: ${error.message}`);
            next();
        });
    },
    bookDel: (req, res) => {
        Book.find({})
    .then(book => { 
        res.render("DeleteABook", { data: book});
        })
        .catch(error => {
            console.log(`Error fetch books: ${error.message}`)
            res.redirect("/home");
        });
    }
}