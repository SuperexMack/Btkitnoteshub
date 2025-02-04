const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const secretKey = process.env.SECRET_KEY

const authMiddleWare = ((req,res,next)=>{
   let getToken = req.headers.authorization
   console.log("GetToken is : " + getToken)
   if(!getToken || !getToken.startsWith("Bearer ")) return res.json({msg : "You are not a authorized user"})
   try{
    let splitedToken = getToken.split(" ")[1]
    let verifyJwtToken = jwt.verify(splitedToken , secretKey)
    if(verifyJwtToken.getUserId){
        req.userId = verifyJwtToken.getUserId
        next()
    }
    else return res.json({msg:"Pleae login/register to contribute"})
   }
   catch(error){
    return res.json({msg : "Something went wrong while authorizing the user || Contact the developers"})
   }
})

module.exports = authMiddleWare