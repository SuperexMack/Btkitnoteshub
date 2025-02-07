const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const UserData = require("./Controllers/Users")
const fileData = require("./Controllers/Data")
const postUser = require("./Controllers/Posts")
const alldata = require("./Controllers/getpostdata")
const getUsers = require("./Controllers/getuser")
const fans = require("./Controllers/fanLogic")
const comments = require("./Controllers/addComment")
const cors = require("cors")

app.use(cors({
    origin : 'http://localhost:3000',
    methods : ["GET","POST"],
    allowedHeaders : ['Content-Type,Authorization']
}))

app.use(express.json())

app.use("/v1" , UserData)
app.use("/v1/addData" , fileData)
app.use("/v1/postkaro" , postUser)
app.use("/v1/post" , alldata)
app.use("/v1/getusers" , getUsers)
app.use("/v1/fans" , fans)
app.use("/v1/comment" , comments)
app.get("/", (req,res)=>{
    return res.json({msg : "Welcome to the v1 of the btkit website"});
})

app.listen(PORT , ()=>{
    console.log(`Your server is running on the PORT number ${PORT}`)
})