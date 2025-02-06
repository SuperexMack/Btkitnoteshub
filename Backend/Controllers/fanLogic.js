const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient()
const express = require("express")
const router = express.Router()
const middleWare = require("../Middlewares/dataMiddle")

router.post("/follow" , middleWare , async(req,res)=>{
    let getverifcationData = req.userId
    if(!getverifcationData) return res.json({msg : "Plese Login/register first"})

    try{

        let following = req.body.following
        // Checking that already followed or not
        
        let checkFollower = await Prisma.fans.findFirst({
            data:{
                following,
                followedby:getverifcationData
            }
        })

        if(checkFollower) return res.json({msg:"You are already following this user"})

        await Prisma.fans.create({
            data:{
                following,
                followedby : getverifcationData
            }
        })
        return res.json({msg : "Successfully Followed"})
    }

    catch(error){
        console.log("Something went wrong whole f")
    }
})


router.post("/getFollowers" , async(req,res)=>{
   let getuserid = req.body.userid
   try{
    let incomingData = await Prisma.fans.findMany({
        where : {
            following : getuserid
        }
     })

    return res.json({followers : incomingData})
   }
   catch(error){
    console.log("Something went wrong while fiding out the follwers" + error)
    return res.json({msg:"Something went wrong while fiding out the follwers"})
   }
})


// checking Total followers of a particular user

router.post("/countFollowers" , async(req,res)=>{
    let checkFollowers = req.body.id
    let howmuchfollowing = req.body.id
    try{
        let allUsers = await Prisma.fans.findMany({
            where:{
                following:checkFollowers
            }
        })
        let allUserspartTwo = await Prisma.fans.findMany({
            where:{
                followedby:howmuchfollowing
            }
        })
        let findLength = allUsers.length
        let findfollowingLength = allUserspartTwo.length
        let totalData = {followedby : findLength , followto:findfollowingLength}
        return res.json({msg : totalData})
    }
    catch(error){
        console.log("something went wrong  " + error)
        return res.json({fandata : "something went wrong  " + error})
    }
})

module.exports = router