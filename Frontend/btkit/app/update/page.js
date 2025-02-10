"use client"

import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';

export default function UpdateProfile() {

    const [newname,setNewname] = useState("")
    const [changing,setChanging] = useState(false)

    // http://localhost:2000/v1/updateUser/editUser

    const updateName = async()=>{
      let getToken = localStorage.getItem("authorization")
      if(!getToken) return toast.error("You need to sign in to do this")
      setChanging(true)
      await axios.post("http://localhost:2000/v1/updateUser/editUser" , {
        username:newname
      }
      ,
      {
        headers:{
            Authorization:getToken
        }
      })
      .then((response)=>{
        toast.success(response.data.msg)
        setChanging(true)
      })
      .catch((error)=>{
        toast.error(error)
        setChanging(true)
      })
    }


  return (
    <>
    <div className="bg-gray-50 w-full min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="flex flex-col items-center">
          <UserCircle className="w-16 h-16 text-gray-400" />
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">
            Update Profile
          </h1>
          <p className="text-gray-500 mt-2 text-center">
            Change your profile information below
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input onChange={(e)=>setNewname(e.target.value)} id="name" type="text" placeholder="Enter your new name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"/>
          </div>
          
          <button onClick={updateName} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
            {changing?(
             <div>
               <h1>Updating Name........</h1>
             </div>
            ):(
                <>
                <h1>Update Name</h1>
                </>
            )}
          </button>
        </div>
      </div>
    </div>
    <ToastContainer></ToastContainer>
    </>
  );
}