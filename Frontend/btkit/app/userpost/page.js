"use client"

import { useRef, useState } from "react"
import { Upload } from 'lucide-react';
import axios from "axios";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

export default function() {
    const giveRef = useRef(null)
    const [title, setTitle] = useState("")
    const [myfile, setFile] = useState("")
    const [check , setCheck] = useState(false)
    const [loading ,setLoading] = useState(false)

    const reef = useRouter()
    

    const newRef = () => {
       giveRef.current.click();
    }


    const handleFile = (e)=>{
        e.preventDefault();
        let newFiles = e.target.files[0]
        if(newFiles){
            var reader = new FileReader()
            reader.onloadend = function(){
                setFile(reader.result)
                console.log("File added")
                setCheck(true)
            }
            reader.readAsDataURL(newFiles)
        }
    }


    const postKaro = async()=>{
        setLoading(true)
        let token = localStorage.getItem("authorization")
        if(!token){
            toast.error("Kindly login to Post")
            setTimeout(()=>reef.push("/Signin"),2000)
            return 
        }
        await axios.post("http://localhost:2000/v1/postkaro/postdaily" , {
          title,
          postPhoto:myfile
        } , {
            headers:{
               Authorization : token 
            }
        })
        .then((response)=>{
            setLoading(false)
            toast.success(response.data.msg)
            setTimeout(()=>reef.push("/feed"),2000)
        })
        .catch((error)=>{
            console.log("Post error" + error)
            setLoading(false)
            toast.error("Unable to do a post")
        })
        
    }

    return (
        <>
        {loading ? (
           <div className="flex justify-center items-center h-screen w-full">
           <div className="w-[70px] h-[70px] border-4 border-t-white border-purple-600 animate-spin rounded-full">
              
           </div>
         </div>
        ) : (
            <>
           <div className="w-full  min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
            <div className="w-full z-10 max-w-4xl h-auto md:h-[500px] border-2 border-slate-300 flex flex-col md:flex-row justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="w-full md:w-[40%] h-64 md:h-full flex justify-center items-center bg-gray-100 p-4">
                {/* {check ?(
                   <Image src={myfile} className="h-full w-full" alt="post_photo"></Image>
                ) : ( */}
                    <h1 className="font-medium text-xl md:text-2xl text-gray-700 text-center">
                    Your photo will be visible here in V2
                </h1>
                {/* )}
                    */}
               </div>

               <div className="w-full md:w-[60%] flex flex-col p-6 md:p-8 items-center space-y-6 md:space-y-8">
                   <div className="flex flex-col space-y-3 w-full">
                       <label className="font-semibold text-lg text-gray-700">Title</label>
                       <input onChange={(e)=>setTitle(e.target.value)} placeholder="Enter post title here"  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                   </div>

                   <div className="flex flex-col space-y-3 w-full">
                       <label className="font-semibold text-lg text-gray-700">Enter Image</label>
                       <button onClick={newRef} className="p-3 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition duration-300"> Add Image</button>
                   </div>

                   <input onChange={handleFile} ref={giveRef} className="hidden" type="file" />

                   <div className="w-full flex justify-center">
                       <button onClick={postKaro} className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"> <Upload className="h-6 w-6" /></button>
                   </div>
               </div>
            </div>
            <ToastContainer/>
        </div>
       
        </>
        )}
       
        </>
    )
}