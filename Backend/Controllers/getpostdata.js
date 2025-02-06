const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient()
const express = require("express")
const router = express.Router()

router.get("/getalldata" , async(req,res)=>{
    let postdata = await Prisma.userPost.findMany()
    
    try{
        return res.json({
            alldata : postdata
        })
    }
    catch(error){
        return res.json({msg : "unable to find out data"})
    }
})

module.exports = router