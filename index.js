//declare required modules
const port = 3000
const express = require('express')
const app = express()
const homeController = require("./controllers/homeController")
const mongoose = require("mongoose")
const model = require("./models/book")
const { query } = require('express')
const dotenv = require("dotenv").config()
//DB URL stored in .env file
const uri = process.env.ATLAS_URI;

//connect to the database
mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

//log in console that connection is completed
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

//get the views from controller
app.set('view engine', 'ejs'); 
app.get("/home", homeController.sendReqParam,)
app.get("/", function(req,res){
    res.redirect("/home");
});
app.get("/books/1", homeController.sendReqParam)
app.get("/books/2", homeController.sendReqParam)
app.get("/books/3", homeController.sendReqParam)
//creates static record for public folder path
app.use(express.static('public'))

//start the server on the specified port
.listen(port, () => {
    console.log(`The express.js server has started and is listening on port number:${port}`);   
});
