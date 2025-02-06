"use client"

import Image from "next/image"
import google from "./googleimg.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from 'next/navigation'

export default function Profile() {

  const params = useParams()
  const { id } = params

  const [allusers, setAllusers] = useState([])
  const [loading,setLoading] = useState(false)
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")

  useEffect(() => {
    const userInfo = async () => {
      setLoading(true)
      await axios.get(`http://localhost:2000/v1/getusers/getuser/${id}`)
        .then((response) => {
          console.log("Got the data")
          setAllusers(response.data.userdata)
          setUsername(response.data.userdata.username)
          setEmail(response.data.userdata.email)
          setLoading(false)
        })
        .catch((error) => {
          console.log("Got some error " + error)
          setLoading(false)
        })
    }

    userInfo()
  }, [id])

  return (
    <>
    {loading ? (
      <div className="flex justify-center items-center h-screen w-full">
           <div className="w-[70px] h-[70px]  border-4 border-blue-600 animate-spin rounded-3xl">
              
           </div>
         </div>
    ) : (
      <>
       <div className="w-full min-h-screen flex flex-col items-center">
        <div className="h-auto p-3 w-full mt-[150px] flex flex-col space-y-3">
          <div className="w-full h-auto flex items-center justify-center sm:justify-center">
            <div className="w-full p-2 space-x-8 flex sm:justify-center sm:items-center">
              <div className="h-full w-[70px] sm:w-[100px]">
                <Image src={google} alt="user_image" className="w-full h-full"></Image>
              </div>
              <div className="flex justify-center items-center sm:w-[40%] sm:space-x-9 sm:relative sm:left-5">
                <div className="flex space-x-3 sm:space-x-8">
                  <div className="flex flex-col space-y-2">
                    <h1 className="font-bold sm:text-[30px]">0</h1>
                    <p className="font-normal sm:text-[25px]">posts</p>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <h1 className="font-bold sm:text-[30px]">19</h1>
                    <p className="font-normal sm:text-[25px]">followers</p>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <h1 className="font-bold sm:text-[30px]">20</h1>
                    <p className="font-normal sm:text-[25px]">following</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="w-full h-auto flex flex-col items-center space-y-2">
            <h1 className="text-center text-[25px] font-bold sm:text-[30px]">{username}</h1>
            <p className="text-center text-[20px] text-gray-600 sm:text-[25px]">{email}</p>
          </div>

          <div className="w-full h-auto flex space-y-3 flex-col">
            <div className="w-full h-auto p-2">
              <div className="w-full h-auto p-2 flex justify-around items-center">
                <button className="bg-slate-200 text-purple-600 shadow-lg hover:cursor-pointer p-1 rounded-md font-bold md:text-[25px]">Edit Profile</button>
                <button className="bg-slate-200 text-purple-600 shadow-lg hover:cursor-pointer p-1 rounded-md font-bold md:text-[25px]">Share profile</button>
              </div>

              <div className="flex justify-center items-center">
                <button className="p-2 bg-blue-700 w-[200px] mt-2 text-[20px] text-white rounded-md sm:text-[30px] sm:w-[300px] sm:p-1">Follow</button>
              </div>
            </div>
          </div>

          <div className="w-full h-auto flex flex-col items-center">
            <h1 className="text-center mt-5 text-[25px] font-medium sm:text-[30px]">Your contributions</h1>
            <div className="w-full flex flex-col items-center space-y-7">
              <div className="w-[90%] p-3">
                <h1 className="text-center">Title: This side Mack Walker and I am very happy today</h1>
              </div>

              <div className="w-[90%] p-3">
                <h1 className="text-center">Title: This side Mack Walker and I am very happy today</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )}
     
    </>
  )
}