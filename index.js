const express = require('express')
const app = express()
const bookController = require("./controllers/bookController")
const mongoose = require("mongoose")
const model = require("./models/book")
const { query } = require('express')
const dotenv = require("dotenv").config()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))
const methodOverride = require("method-override");
app.use(methodOverride("_method", {methods: ["POST", "GET"]}));

//DB URL stored in .env file
const uri = process.env.ATLAS_URI;
router = express.Router();

//connect to the database
mongoose.connect(uri, { useUnifiedTopology: true });
const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.use(express.static('public'))
app.set("port", process.env.PORT || 3000);
app.set('view engine', 'ejs'); 
app.use("/",router);
app.get("/", function(req,res) {res.redirect("/home");});
router.get("/home", bookController.index)
router.get("/AddNewBook", bookController.new)
router.post("/add", bookController.create, bookController.redirectView)
router.get("/books/:id", bookController.show)
router.get("/DeleteABook", bookController.bookDel)
router.delete("/home/:name/delete", bookController.delete, bookController.redirectView)

app.listen(app.get("port"), () => {
    console.log(`The express.js server has started and is listening on port number:${app.get("port")}`);   
});
