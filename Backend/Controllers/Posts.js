const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient()
const express = require("express")
const router = express.Router()
const zod = require("zod")
require("dotenv").config()
const secretKey = process.env.SECRET_KEY
const middleware = require("../Middlewares/dataMiddle")
const cloudinary = require("../Storage/cloudinary")
console.log("Your secret key is : " + secretKey)


let data = zod.object({
  title : zod.string(),
  postPhoto : zod.string()
})

router.post("/postdaily" ,middleware,async(req,res)=>{
    let getverifcationData = req.userId
    if(!getverifcationData) return res.json({msg : "Plese Login/register first"})
    
    let {success} = data.safeParse(req.body)
    if(!success) return res.json({msg : "Insert the data again || Data format is wrong"})
    let {title,postPhoto} = req.body
    
    const uploadResult = await cloudinary.uploader.upload(postPhoto ,{
        folder: "btkit",  
        use_filename: true, 
        unique_filename: true,  
    })
    .catch((error) => {
        console.log(error);
       });

    const pdfUrl = uploadResult.secure_url

    let currentDate = new Date();
    let changeDate = currentDate.toISOString().slice(0,10)


    

    try{
    let getUser = await Prisma.user.findFirst({
        where : {
            id:getverifcationData
        }
    })
   
    let getUserName = getUser.username

    await Prisma.userPost.create({
        data:{
            title,
            postPhoto:pdfUrl,
            postedon: changeDate,
            postedBy : getUserName,
            postId : getverifcationData
        }
    })
    return res.json({msg : "Post Successful"})
    
   }

   catch(error){
    console.log("Your are getting an error while adding the data " + error)
    return res.json({msg : "Your are getting an error while adding the data " + error})
   }
        
})


module.exports = router