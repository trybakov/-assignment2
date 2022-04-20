//declare required modules
const express = require('express')
const app = express()
const homeController = require("./controllers/homeController")
const bookController = require("./controllers/bookController")
const mongoose = require("mongoose")
const model = require("./models/book")
const { query } = require('express')
const dotenv = require("dotenv").config()
//extra
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))
const methodOverride = require("method-override");
app.use(methodOverride("_method", {methods: ["POST", "GET"]}));
//DB URL stored in .env file
const uri = process.env.ATLAS_URI;

//connect to the database
mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

//log in console that connection is completed
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
//get the views from controller
app.set('view engine', 'ejs'); 
app.get("/books/1", homeController.sendReqParam)
app.get("/books/2", homeController.sendReqParam)
app.get("/books/3", homeController.sendReqParam)

router = express.Router();
app.use("/",router);

router.get("/home", bookController.index)
//add new view for adding book page
router.get("/AddNewBook", bookController.new)
////add new view for deleting book page
router.get("/DeleteABook", bookController.bookDel)
router.post("/add", bookController.create, bookController.redirectView)
router.delete("/home/:name/delete", bookController.delete, bookController.redirectView)
//creates static record for public folder path
app.use(express.static('public'))

//start the server on the specified port
app.listen(app.get("port"), () => {
    console.log(`The express.js server has started and is listening on port number:${app.get("port")}`);   
});
