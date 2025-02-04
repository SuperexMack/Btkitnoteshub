const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const UserData = require("./Controllers/Users")
const cors = require("cors")

app.use(cors({
    origin : 'http://localhost:3000',
    methods : ["GET","POST"],
    allowedHeaders : ["Content-Type"]
}))

app.use(express.json())

app.use("/v1" , UserData)

app.get("/", (req,res)=>{
    return res.json({msg : "Welcome to the v1 of the btkit website"});
})

app.listen(PORT , ()=>{
    console.log(`Your server is running on the PORT number ${PORT}`)
})