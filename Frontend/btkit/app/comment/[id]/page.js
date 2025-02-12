"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { jwtDecode } from "jwt-decode"
import { MessageCircle, Send } from "lucide-react"

export default function() {
    const params = useParams()
    const {id} = params
    const [addComment, setAddcomment] = useState("")
    const [allcomments, setAllcomments] = useState([])
    const [userPhoto, setuserPhoto] = useState("")
    const [alldatainfo, setAlldatainfo] = useState([])
    const [userToken, setUserToken] = useState("")
    const [commentAdding, setCommentAdding] = useState(false)

    useEffect(() => {
        let getToken = localStorage.getItem("authorization")
        if(getToken) {
            let usertoken = jwtDecode(getToken)
            setUserToken(usertoken.getUserId)
        }
    }, [])

    const addCommentFromFrontend = async() => {
        let getTokenofuser = localStorage.getItem("authorization")
        if(getTokenofuser == null) return toast.error("Register/login to post a comment")
        setCommentAdding(true)
        await axios.post("http://localhost:2000/v1/comment/postcomment", {
            comment: addComment,
            postid: id,
            commentpersonid: userToken
        })
        .then((response) => {
            toast.success(response.data.msg)
            setCommentAdding(false)
            setAddcomment("")
        })
        .catch((error) => {
            toast.error(error)
            setCommentAdding(false)
        })
    }

    useEffect(() => {
        const getCommentData = async() => {
            await axios.get(`http://localhost:2000/v1/comment/getcomment/${id}`)
            .then((response) => {
                setAllcomments([...response.data.msg].reverse())
            })
            .catch((error) => {
                console.log("something went wrong while finding the comment " + error)
            })
        }
        getCommentData()
    }, [allcomments])

    useEffect(() => {
        const getData = async() => {
            await axios.get("http://localhost:2000/v1/post/getalldata")
            .then((response) => {
                setAlldatainfo(response.data.alldata)
            })
            .catch((error) => {
                console.log("Error while catching data : " + error)
            })
        }
        getData()
    }, [])

    useEffect(() => {
        let findPhoto = alldatainfo.find((value) => value.id == id)
        if(findPhoto) {
            setuserPhoto(findPhoto.postPhoto || null)
        }
    }, [id, alldatainfo])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto pt-20 px-4">
                {/* Main Post Image */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="w-[80%] h-[400px] mx-auto sm:w-[50%] md:w-[40%] lg:w-[30%] lg:h-[400px] mt-[150px]">
                        {userPhoto ? (
                            <Image 
                                width={16}
                                height={9}
                                src={userPhoto}
                                className="h-full w-[500px] rounded-lg"
                                alt="post_photo"
                                layout="responsive"
                            />
                            
                        ) : (
                            <div className="flex items-center justify-center h-full bg-gray-100">
                                <p className="text-gray-500 font-medium">Loading image...</p>
                            </div>
                        )}
                    </div>

                    {/* Comment Input Section */}
                    <div className="p-4">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="flex-1 relative">
                                <input
                                    value={addComment}
                                    onChange={(e) => setAddcomment(e.target.value)}
                                    placeholder="Add a comment..."
                                    className="w-full px-4 py-2 pr-12 rounded-full border border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                                />
                                <button
                                    onClick={addCommentFromFrontend}
                                    disabled={commentAdding}
                                    className="absolute right-2 top-1/2 -translate-y-1/2"
                                >
                                    <Send className={`w-5 h-5 ${commentAdding ? 'text-gray-400' : 'text-purple-600 hover:text-purple-700'}`} />
                                </button>
                            </div>
                        </div>

                        {/* Comments List */}
                        <div className="space-y-4">
                            {allcomments.map((value, index) => (
                                <div key={index} className="flex space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">
                                            {value.commentTitle[0]?.toUpperCase() || 'A'}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-gray-50 rounded-2xl px-4 py-2">
                                            <p className="font-medium text-sm text-gray-900">Anonymous</p>
                                            <p className="text-gray-700 mt-1">{value.commentTitle}</p>
                                        </div>
                                        <div className="mt-1 ml-4">
                                            <button className="text-xs text-gray-500 hover:text-gray-700">Reply</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}