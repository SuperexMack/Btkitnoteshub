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
  summary : zod.string(),
  year : zod.string(),
  fileo : zod.string(),
})

router.post("/postdata" ,middleware,async(req,res)=>{
    let getverifcationData = req.userId
    if(!getverifcationData) return res.json({msg : "Plese Login/register first"})
    
    let {success} = data.safeParse(req.body)
    if(!success) return res.json({msg : "Insert the data again || Data format is wrong"})
    let {title,summary,year,fileo} = req.body
    
    const uploadResult = await cloudinary.uploader.upload(fileo ,{
        folder: "btkit",  
        use_filename: true, 
        unique_filename: true,   
    })
    .catch((error) => {
        console.log(error);
       });

    const pdfUrl = uploadResult.secure_url

    try{
    await Prisma.pdfFolder.create({
        data:{
            title,
            summary,
            year,
            fileo:pdfUrl,
            authorId : getverifcationData
        }
    })
    return res.json({msg : "Data is added to the database Thanks for your contribution"})
    
   }

   catch(error){
    console.log("Your are getting an error while adding the data " + error)
    return res.json({msg : "Your are getting an error while adding the data " + error})
   }
        
})


module.exports = router