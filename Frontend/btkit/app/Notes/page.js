"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { Book } from 'lucide-react';

export default function(){

    const [inputValue ,setInputValue] = useState("1")
    const [getpdfData,setPdfData] = useState([])
    const [loading,setLoading] = useState(false)


    useEffect(()=>{
        setLoading(true)
        axios.post("http://localhost:2000/v1/getnotesdata/getnotes" , {
            year:inputValue
        })
        .then((response)=>{
            setPdfData(response.data.pdfdata)
            console.log("PDF data is :" + response.data.pdfdata)
            setLoading(false)
        })
        .catch((error)=>{
            console.log("Something went wring while getting the pdf data " + error)
            setLoading(false)
        })
    },[inputValue])


    return(
        <>

       {loading?(
        <div className="flex justify-center items-center h-screen w-full">
           <div className="w-[70px] h-[70px] border-4 border-t-white border-purple-600 animate-spin rounded-full">
              
           </div>
         </div>
       ):(
        <>
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="w-full flex flex-col items-center justify-center h-auto mt-[150px] space-y-5">
             <h1 className="font-bold text-[30px]">Select Year</h1>
             <select onChange={(e)=>setInputValue(e.target.value)} name="plan" id="plan"  className="w-[70%] border-2 border-blue-400 rounded-xl p-1 sm:w-[60%] md:w-[40%]">
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
             </select>
          </div>

          {getpdfData.length > 0 ? (getpdfData.map((value, index) => (
          <div key={index} className="flex flex-col mt-[50px] space-y-4  w-full h-auto items-center p-2">
      <div className="bg-slate-300 rounded-lg w-[80%] h-[300px] sm:w-[70%] sm:h-[400px] md:w-[40%] md:h-[460px]">
        <iframe src={value.fileo} className="w-full h-full rounded-lg shadow-lg"></iframe>
      </div>

      <div className="flex space-x-2 items-center justify-center">
        <Book />
        <h1 className="text-center text-[20px] font-medium">
          <span className="font-bold">Subject</span> - {value.title}
        </h1>
      </div>

      <div className="flex space-x-2 items-center justify-center w-full sm:w-[80%] md:w-[40%]">
        <p className="text-center text-[18px] font-medium">
          <span className="font-bold">Summary</span> - {value.summary}
        </p>
      </div>

      <h1 className="text-center text-[20px] font-medium">
        <span className="font-bold">Contributed by</span> - Mohit San
      </h1>
    </div>
    ))
   ) : (
    <h1 className="text-[30px] font-bold mt-[50%]">Data will be available here....</h1>
   )}



        </div>
        </>
       )} 

        </>
    )
}