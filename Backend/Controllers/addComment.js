const express = require("express")
const router = express.Router()
const middleware = require("../Middlewares/dataMiddle")
const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient()

router.post("/postcomment" ,middleware,async(req,res)=>{
    let getverifcationData = req.userId
    if(!getverifcationData) return res.json({msg : "Plese Login/register first"})
    try{
        let getpostid = req.body.postid
        let comment = req.body.comment
        let storeComment = await Prisma.comments.create({
            data:{
                commentTitle:comment,
                commentAddedBy : getverifcationData,
                commentsid:getpostid
            }
        })
        if(storeComment) return res.json({msg:"Commnet added successfully"})
        else return res.json({msg:"Something went wrong while adding comment"})
        
    }
    catch(error){
        console.log("Some error occured while adding comment " + error)
        return res.json({msg:"Some error occured while adding comment " + error})
    }
    
})

router.get("/getcomment" , async(req,res)=>{
    
    try{
    let allcomments = req.body.commentid
      let findComments = await Prisma.comments.findMany({
        where:{
            commentsid:allcomments
        }
      })
      if(findComments) return res.json({msg : findComments})
    }
    catch(error){
        console.log("Something went wrong while getting the comments " + error)
        return res.json({msg:"Something went wrong while getting the comments " + error})
    }
})


module.exports = router