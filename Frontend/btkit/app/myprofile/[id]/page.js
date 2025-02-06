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
  const [peopleFollowme , setPeoplefollowme] = useState("")
  const [peopleiamfollowing,setiamfollowing] = useState("")
  const [fans,setFans] = useState([])

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


  const getFans = async()=>{
    await axios.post(`http://localhost:2000/v1/fans/countFollowers` , {
      id
    })
    .then((response)=>{
      setPeoplefollowme(response.data.msg.followedby)
      setiamfollowing(response.data.msg.followto)
      console.log(response.data.msg.followedby)
  console.log(response.data.msg.followto)

    })
    .catch((error)=>{
      console.log("There is some error while finding fans")
    })
  }


  useState(()=>{
    getFans()
  },[peopleFollowme,peopleiamfollowing])

  return (
    <>
    {loading ? (
      <div className="flex justify-center items-center h-screen w-full">
           <div className="w-[70px] h-[70px] border-4 border-t-white border-purple-600 animate-spin rounded-full">
              
           </div>
         </div>
    ) : (
      <>
       <div className="bg-gray-50 min-h-screen w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-2xl mx-auto">
            
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-32 relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-32 h-32 rounded-full  overflow-hidden">
                  <Image src={google} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            
            <div className="pt-20 text-center">
              <h1 className="text-3xl font-bold text-gray-800">{username}</h1>
              <p className="text-gray-500 mt-2">{email}</p>

              
              <div className="flex justify-center space-x-8 mt-6">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-gray-800">0</span>
                  <span className="text-gray-500">Posts</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-gray-800">{peopleFollowme}</span>
                  <span className="text-gray-500">Followers</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-gray-800">{peopleiamfollowing}</span>
                  <span className="text-gray-500">Following</span>
                </div>
              </div>

             
              <div className="flex justify-center space-x-4 mt-6 pb-6">
                <button className="bg-gray-200 text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                  Edit Profile
                </button>
                <button className="bg-gray-200 text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                  Share Profile
                </button>
              </div>

              
              <div className="px-6 pb-8">
                <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                  Follow
                </button>
              </div>
            </div>
          </div>

         
          <div className="max-w-2xl mx-auto mt-8 bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Your Contributions</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
                <h3 className="text-center">Title: This side Mack Walker and I am very happy today</h3>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
                <h3 className="text-center">Title: This side Mack Walker and I am very happy today</h3>
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