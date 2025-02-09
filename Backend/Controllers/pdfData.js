const { PrismaClient } = require('@prisma/client')
const Prisma = new PrismaClient()
const express = require("express")
const router = express.Router()
const zod = require("zod")


const checkYear = zod.object({
    year:zod.string().min(1).max(1)
})


router.post("/getnotes" ,async(req,res)=>{
   let {success} = checkYear.safeParse(req.body)
   if(!success) return res.json({msg:"Year need to be a single digit"})
    try{
        let getYear = req.body.year
        let allpdfdata = await Prisma.pdfFolder.findMany({
         where:{
             year:getYear
         }
        })
        if(allpdfdata) return res.json({pdfdata:allpdfdata})
        else return res.json({msg:`No pdf from ${getYear} is uploaded yet`})
    }
    catch(error){
        console.log("Some error on finding the pdf " + error)
        return res.json({msg:"Some error on finding the pdf "})
    }
   
   
})

module.exports = router