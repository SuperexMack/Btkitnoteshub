"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode"; 

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [check,setCheck] =  useState(false)
  const [userid,setUserid] = useState(null)

  // const router = useRouter()


  useEffect(()=>{
    let checkLocalStorage = localStorage.getItem("authorization")
    if(checkLocalStorage){
      let secuserid = jwtDecode(checkLocalStorage)
      setUserid(secuserid.getUserId)
      if(checkLocalStorage && checkLocalStorage !== undefined) setCheck(true) 
    }
    
  },[])


  const logout = ()=>{
    localStorage.removeItem("authorization")
    toast.success("Successfully logged out")

  }
  
  

  return (
    <>
      <div className="bg-slate-100  z-20 h-[100px] w-full flex items-center fixed">
        <div className="relative left-4 md:left-[15%]">
          <h1 className="font-bold text-[30px] md:text-[30px] bg-gradient-to-r from-gray-700 via-slate-400 to-slate-800 bg-clip-text text-transparent">
            BTKIT Springs
          </h1>
        </div>

        <button 
          className="absolute right-4 md:hidden z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <div className="hidden md:flex space-x-8 absolute right-[10%] list-none">
          <Link href={"/"}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Home</li></Link>
          <Link href={"/"}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Contact</li></Link>
          <Link href={`/myprofile/${userid}`}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">My Profile</li></Link>
          <Link href={"/feed"}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Posts Section</li></Link>
          <Link href={"/addnotes"}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Contribute</li></Link>
          <Link href={"/"}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Notes Section</li></Link>
          {check ? (
          <li onClick={logout} className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Logout</li>
          ) :(
            <>
          <Link href={"/Signup"}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Signup</li></Link>
          <Link href={"/Signin"}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Login</li></Link>
          </>
          )  
        }
        </div>

        <div className={`fixed md:hidden top-[100px] right-0 h-screen w-full bg-slate-100 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center space-y-8 pt-8 list-none">
            <Link href={"/"} onClick={() => setIsOpen(false)}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Home</li></Link>
            <Link href={"/"} onClick={() => setIsOpen(false)}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Contact</li></Link>
            <Link href={"/myprofile"} onClick={() => setIsOpen(false)}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">My Profile</li></Link>
            <Link href={"/addnotes"} onClick={() => setIsOpen(false)}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Contribute</li></Link>
            <Link href={"/"} onClick={() => setIsOpen(false)}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Notes Section</li></Link>
            <Link href={"/Signup"} onClick={() => setIsOpen(false)}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Signup</li></Link>
            <Link href={"/Signin"} onClick={() => setIsOpen(false)}><li className="text-[20px] font-bold text-slate-500 hover:text-slate-950">Login</li></Link>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}