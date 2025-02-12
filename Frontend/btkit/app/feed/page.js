"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
import { MessagesSquare } from 'lucide-react'
import Link from "next/link"

export default function() {
    const [backendData, setBackendData] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const getData = async() => {
            setLoading(true)
            await axios.get("http://localhost:2000/v1/post/getalldata")
            .then((response) => {
                setBackendData([...response.data.alldata].reverse())
                console.log("mil gya data")
                setLoading(false)
            })
            .catch((error) => {
                console.log("Error while catching data : " + error)
                setLoading(false)
            })
        }
        getData()
    }, [])

    return (
        <>
        {loading ? (
          <div className="flex justify-center items-center h-screen w-full">
          <div className="w-[70px] h-[70px] border-4 border-t-white border-purple-600 animate-spin rounded-full">
             
          </div>
        </div>
        ):(
          <>
          <div className="flex flex-col space-y-4 min-h-screen w-full items-center bg-gray-50">
            <div className="z-10 mt-[150px] min-h-screen w-full flex items-center flex-col space-y-6">
                {backendData.map((userinfo, index) => (
                    <div key={index} className="bg-white shadow-sm border border-gray-200 sm:w-[60%] md:w-[30%] h-auto mt-5 w-[90%] rounded-lg overflow-hidden">
                        <div className="p-3 border-b border-gray-100">
                            <h1 className="text-sm font-medium text-gray-900">{userinfo.postedBy}</h1>
                        </div>
                        
                        <Image 
                            src={userinfo.postPhoto} 
                            className="h-full w-full" 
                            alt="Post Image" 
                            width={16} 
                            height={9} 
                            layout="responsive"
                        />
                        
                        <div className="p-3 space-y-2">
                            <div className="flex items-center space-x-2">
                                <Link href={`http://localhost:3000/comment/${userinfo.id}`}><MessagesSquare className="w-6 h-6 text-gray-700" /></Link>
                            </div>
                            
                            <div className="space-y-1">
                                <p className="text-sm">
                                    <span className="font-medium">Caption : </span>
                                    {" "}
                                    <span className="text-gray-900">{userinfo.title}</span>
                                </p>
                                <p className="text-xs font-bold text-gray-500">{userinfo.postedon}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
          </>
        )}
        
        </>
    )
}