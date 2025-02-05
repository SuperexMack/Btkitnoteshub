"use client"


import axios from 'axios';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function(){
    const [users,getUsers] = useState([])
    const [changingUsers , setChangingUsers] = useState("")
    // const [newval,setnewval] = useState([])

    const getUserFunction = async()=>{
        await axios.post("http://localhost:2000/v1/getusers/getuserdata" , {
          username:changingUsers
        })
        .then((response)=>{
            getUsers(response.data.allofmyusers)
            console.log("mil gya hai data")
            // console.log(response.data.allofmyusers)
            
        })
        .catch((error)=>{
            console.log("some error " + error)
        })
        
        }

    // console.log(users)



    useEffect(()=>{
        getUserFunction()
    },[changingUsers])

   
    const setUser = users.filter((newvalue)=>
        newvalue.username.toLowerCase().includes(changingUsers.toLowerCase())
    )
    


    return (
        <>
        <div className="min-h-screen w-full flex flex-col items-center">
          <div className="z-10 w-full p-3 h-auto overflow-y-scroll flex flex-col space-y-5 mt-[140px] sm:items-center md:items-center">
            <div className="w-full sm:w-[60%] md:w-[60%]">
            <input onChange={(e)=>setChangingUsers(e.target.value)} placeholder="Enter user's Name" className="p-2 w-full border-2 border-slate-400 rounded-2xl"></input>
            </div>

            <div className="w-full h-auto flex flex-col space-y-3 p-3 sm:items-center md:items-center">
                   {setUser.length>0 && changingUsers.length>0?(
                       setUser.map((value,index)=>(
                        <div key={index} className='flex flex-col space-y-6'>
                          <div className='flex space-x-3'>
                          <span><ArrowUpRight className='text-slate-500 font-medium md:text-[30px] sm:text-[25px]'></ArrowUpRight></span> 
                          <h1 className='text-[20px] font-medium md:text-[30px] sm:text-[25px]'>{value.username}</h1>
                          </div>
                        </div>
                       ))
                   ) : (
                    <>
                    <h1 className='text-[20px] font-semibold md:text-[30px] sm:text-[30px]'>No user Found....</h1>
                    </>
                   )}

            </div>
          </div>
        </div>
        </>
    )
}