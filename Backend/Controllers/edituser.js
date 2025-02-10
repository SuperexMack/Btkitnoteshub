const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient()
const express = require("express")
const router = express.Router()
const zod = require("zod")
const middleWare = require("../Middlewares/dataMiddle")


let checkUserData = zod.object({
    username : zod.string().min(2)
})

router.post("/editUser" ,middleWare,async(req,res)=>{
    let getverifcationData = req.userId
    if(!getverifcationData) return res.json({msg : "Plese Login/register first"})
    try{
        let {success}  = checkUserData.safeParse(req.body)
        if(!success) return res.json({msg:"Username should not be empty or username length should be greater or equal to 2"})
        let newUserName = req.body.username
        let finduser = await Prisma.user.findFirst({
          where:{
            id : getverifcationData
          },
        })

        if(!finduser) return res.json({msg:"User not found while updating the data"})
        
        let updatedUser = await Prisma.user.update({
            where:{
                id:getverifcationData
            },
            data:{
                username:newUserName
            }
        })

        if(updatedUser) return res.json({msg:"User updated successfully"})
        else return res.json({msg:"Something went wrong while updating the user"})
    }

    catch(error){
        console.log("Unable to update the user data " + error)
        return res.json({msg:"Unable to update the user data " + error})
    }
    
})

module.exports = router