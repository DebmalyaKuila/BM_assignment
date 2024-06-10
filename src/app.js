const path = require("path")
const express = require("express");
const hbs = require("hbs")
const {topTrends}=require("../selenium script/run")

//connect to mongodb database
const insertData=require("../db/mongodb")


const app = express()

// paths for express config.
const publicDirectoryPath = path.join(__dirname, "../public")
const templatesPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// setting up static directory to serve
app.use(express.static(publicDirectoryPath))

// setup handlebars template engine and views location
app.set("view engine", "hbs")
app.set("views", templatesPath)
hbs.registerPartials(partialsPath)

// setting up routes for my website
app.get("/", (req, res) => {

    res.render("index")
})

// run selenium script 
app.get("/runScript", async(req, res) => {
    let trends=await topTrends()
    //now save these trends in mongoDB
    const data=await insertData(trends)
    //send that mongoDB document as a response
    res.send({"_id":data.insertedId,...trends})
})

// Default 404 page 
app.get("*", (req, res) => {
    res.render("404", {
        msg: "<strong>404</strong>,There's no such page available"
    })
})

app.listen(3000, () => {
    console.log("server is up and running at port 3000 ");
})