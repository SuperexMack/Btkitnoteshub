const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient()
const express = require("express")
const router = express.Router()
const zod = require("zod")
require("dotenv").config()
const secretKey = process.env.SECRET_KEY
const axios = require("axios")
const jwt = require("jsonwebtoken")
console.log("Your secret key is : " + secretKey)

const data = zod.object({
  email : zod.string(),
  username : zod.string()
})

// google auth 

const googleAuth = async(token)=>{
  let changeToken = `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
  console.log("Token is : " + await axios.get(changeToken))
  try{
    let userGoogleData = await axios.get(changeToken)
    console.log("inside the gogle auth")
    return userGoogleData.data
  }
  catch(error){
    console.log("inside the gogle auth part 2")
    console.log(error)
    return res.json({msg : "Something went wrong while google auth backend " + error})
  }
}

router.post("/signup" , async(req,res)=>{
    
    try{
      const googletoken = req.body.googletoken
      // console.log("googleToken is :" + googletoken)
      // console.log("Something went wrong part 1")
      const extractData = await googleAuth(googletoken)
      console.log("Something went wrong part 2")
      if(!extractData) return res.json({msg : "Something went wrong while google auth"})
     
     
      let username = extractData.name
      let email = extractData.email
      const {success} = data.safeParse({username,email})
      // console.log("yes failed")
      // console.log(email)
      // console.log(username)
      if(!success) console.log("Insert data again")
      if(!success) return res.json({msg : "Insert the data again || Data format is wrong"})
      // console.log("success failed")
      console.log("user email is first:" + email)

      let checkUser = await Prisma.user.findFirst({
        where : {
            email
        }
      })
      if(checkUser) return res.json({msg : "User Already exist use any other account || Login with the same acount"})
      // console.log("user email is sec:" + email)
      let storeUser = await Prisma.user.create({
        data:{
            username,
            email
        }
      })
      
      console.log("user email is tha:" + email)

      let getUserId = storeUser.id
      const jwtToken = jwt.sign({getUserId} , secretKey)
      return res.json({token:jwtToken , msg : "Welcome to the website Brat !!"})
    }
    catch(error){
      return res.json({msg : "Data error is : " + error})
    }
})

router.post("/signin" , async(req,res)=>{
    
  try{
    const googletoken = req.body.googletoken
    // console.log("googleToken is :" + googletoken)
    // console.log("Something went wrong part 1")
    const extractData = await googleAuth(googletoken)
    console.log("Something went wrong part 2")
    if(!extractData) return res.json({msg : "Something went wrong while google auth"})
   
   
    let username = extractData.name
    let email = extractData.email
    const {success} = data.safeParse({username,email})
    // console.log("yes failed")
    // console.log(email)
    // console.log(username)
    if(!success) console.log("Insert data again")
    if(!success) return res.json({msg : "Insert the data again || Data format is wrong"})
    // console.log("success failed")
    console.log("user email is first:" + email)

    let checkUser = await Prisma.user.findFirst({
      where : {
          email
      }
    })
    if(!checkUser) return res.json({msg : "User Already exist use any other account || Login with the same acount"})

    let getUserId = checkUser.id
    const jwtToken = jwt.sign({getUserId} , secretKey)
    return res.json({token:jwtToken , msg : "Welcome to the website Brat !!"})
  }
  catch(error){
    return res.json({msg : "Data error is : " + error})
  }
})

module.exports = router