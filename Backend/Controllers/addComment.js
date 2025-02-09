const express = require("express")
const router = express.Router()
const middleware = require("../Middlewares/dataMiddle")
const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient()

router.post("/postcomment",async(req,res)=>{
   console.log("ham aaye postcomment ke aandar")
    try{
        let getpostid = parseInt(req.body.postid)
        let comment = req.body.comment
        let getcommentid = parseInt(req.body.commentpersonid)
        let storeComment = await Prisma.comments.create({
            data:{
                commentTitle:comment,
                commentAddedBy : getcommentid,
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

router.get("/getcomment/:id" , async(req,res)=>{
    
    try{
    let allcomments = parseInt(req.params.id)
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