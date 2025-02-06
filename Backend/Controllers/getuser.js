const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient()
const express = require("express")
const router = express.Router()
const zod = require("zod")
require("dotenv").config()


router.post("/getuserdata" , async(req,res)=>{
    let {username} = req.body
    try{
        let getUserName = await Prisma.user.findMany({
            where:{
                username:{
                    contains : username,
                    mode : "insensitive"
                }
            }
        }) 
        if(getUserName){
            return res.json({allofmyusers:getUserName})
        }
    }

    catch(error){
        console.log("Something went wrong while finding the users " + error)
        return res.json({msg : "Something went wrong while finding the users"})
    }
})

router.get("/getuser/:id" , async(req,res)=>{
    
    try{

        let username = parseInt(req.params.id)
        let getUserName = await Prisma.user.findFirst({
            where:{
                id:username
            }
        }) 
        if(getUserName){
            return res.json({userdata:getUserName})
        }
    }

    catch(error){
        console.log("Something went wrong while finding the users " + error)
        return res.json({msg : "Something went wrong while finding the users"})
    }
})

module.exports = router