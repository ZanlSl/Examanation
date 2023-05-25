const mongoose = require("mongoose")
const Database = require("./database")

mongoose.connect("mongodb+srv://anhhuynh:zansu1411@cluster0.xzubmij.mongodb.net/?retryWrites=true&w=majority", () =>{
    console.log("connected!")
})