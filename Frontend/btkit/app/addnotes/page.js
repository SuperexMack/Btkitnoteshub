"use client"
import axios from 'axios';
import { Upload, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function() {
    const [title,setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [fileo , setFile] = useState("")
    const [year ,setYear] = useState("")
    const myRef = useRef(null)

    const changeRef = ()=>{
        myRef.current.click()
    }

    const handleFile = (e)=>{
        e.preventDefault();
        let newFiles = e.target.files[0]
        if (newFiles) {
          var reader = new FileReader();
          reader.onloadend = function () {
              setFile(reader.result);  
              console.log("file added")
          };
          reader.readAsDataURL(newFiles);  
      }
    }


    const addData = async()=>{
        let getToken = localStorage.getItem("authorization")
        await axios.post("http://localhost:2000/v1/addData/postdata" , {
            title,
            summary,
            year,
            fileo,
        }, {
            headers:{
                Authorization : getToken
            }
        })
        .then((response)=>{
          setTitle("")
          setSummary("")
          setYear("")
          setFile("")
          toast.success(response.data.msg)
        })
        .catch((error)=>{
            toast.error(error)
        })
    }


//     const addData = async(req,res)=>{
//      axios.post("http://localhost:2000/v1/addData" , 
//     { title,
//      summary,
//      year,
//      fileo,
//     },

//     {

//     headers:{

//     }

// })
    
// }
//     }

    const getVal = (e)=>{
       console.log(typeof e.target.value)
       
    }

    return (
        <>
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="min-h-screen w-full flex flex-col space-y-6 justify-center items-center z-10 px-4 py-8">
                <div className="w-full flex justify-center items-center flex-col space-y-6">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-[50px] mt-4 cursor-pointer animate-bounce text-violet-800">
                        Submit Notes 👇 <br className="md:hidden" />
                        <span className="text-xl md:text-2xl lg:text-3xl">(कोई इंतज़ार कर रहा है।)</span>
                    </h1>
                </div>
                <div className="w-full h-auto flex justify-center items-center">
                    <div className="bg-white shadow-2xl w-full md:w-[80%] lg:w-[50%] h-auto rounded-lg z-10 flex flex-col items-center space-y-7 p-4">
                        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col space-y-4 mt-5">
                            <div className="flex space-x-5">
                                <Sparkles className="text-lg md:text-[25px] mt-1 text-violet-600" />
                                <label className="text-lg md:text-[25px] font-bold text-violet-800">Title</label>
                            </div>
                            <input 
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                placeholder="Compiler Design" 
                                className="p-2 rounded-xl border-2 border-violet-300 focus:border-violet-500 focus:outline-none"
                            />
                        </div>

                        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col space-y-4">
                            <div className="flex space-x-5">
                                <Sparkles className="text-lg md:text-[25px] mt-1 text-violet-600" />
                                <label className="text-lg md:text-[25px] font-bold text-violet-800">Summary</label>
                            </div>
                            <textarea 
                                onChange={(e)=>setSummary(e.target.value)}
                                value={summary}
                                placeholder="Write summary here....." 
                                className="p-2 rounded-xl border-2 border-violet-300 focus:border-violet-500 focus:outline-none" 
                                rows={8}
                            />
                        </div>

                        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col space-y-4">
                            <div className="flex space-x-5">
                                <Sparkles className="text-lg md:text-[25px] mt-1 text-violet-600" />
                                <label className="text-lg md:text-[25px] font-bold text-violet-800">PDF Section</label>
                            </div>
                            <div className="flex w-full bg-violet-600 h-[50px] rounded-xl">
                                <button onClick={changeRef} className="bg-white rounded-xl w-full font-bold text-xl md:text-[30px] h-full text-violet-800 border-2 border-violet-300 hover:bg-violet-50 transition-colors">
                                    Enter PDF here
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col space-y-4 mt-5">
                            <div className="flex space-x-5">
                                <Sparkles className="text-lg md:text-[25px] mt-1 text-violet-600" />
                                <label className="text-lg md:text-[25px] font-bold text-violet-800">Notes for which year</label>
                            </div>
                            <select onChange={(e)=>setYear(e.target.value)} name="year" id="year" className='p-2 border-2 border-purple-800'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            </select>
                        </div>

                        <input onChange={handleFile} type='file' ref={myRef} className="hidden" />

                        <div className="w-full mt-8 flex justify-center">
                            <button onClick={addData} className="bg-violet-600 p-4 w-full md:w-[80%] lg:w-[70%] rounded-xl text-lg md:text-[20px] text-white font-bold hover:bg-violet-700 transition-colors">
                                Submit Notes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    );
}