const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const Database = s;
const cors = require("cors")


app.get("/", (req,res)=>{
    return res.json({msg : "Welcome to the v1 of the btkit website"});
})

app.listen(PORT , ()=>{
    console.log(`Your server is running on the PORT number ${PORT}`)
})