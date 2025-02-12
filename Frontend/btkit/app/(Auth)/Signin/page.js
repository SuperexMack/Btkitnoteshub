"use client"

import { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Link from 'next/link';
import googleImage from "../googleimg.png";
import { useRouter } from 'next/navigation';

export default function Signin() {

  const router = useRouter()


  const [isLoading, setIsLoading] = useState(false);

  const AuthenticatUser = async (credentialResponse) => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:2000/v1/signin", {
        googletoken: credentialResponse.credential
      });

      
      if (response.data.token) {
        toast.success(response.data.msg);
        setTimeout(()=>router.push("/") , 2000)
        return localStorage.setItem("authorization", `Bearer ${response.data.token}`);
      } else {
        toast.error("Authentication failed. Please contact support.");
      }
    } catch (error) {
      toast.error(error.response?.msg?.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl border border-gray-100 p-8 space-y-6 transform transition-all duration-300 hover:scale-105">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Student Signin
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-purple-200">
              <Image  src={googleImage}  alt='Google signup'  className="w-full h-full object-cover" width={96} height={96}
              />
            </div>
          </div>

          <GoogleOAuthProvider clientId="819539479154-ddf4ovgv77fg8quni4hq5qf79oscthja.apps.googleusercontent.com">
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={AuthenticatUser}
                onError={() => {
                  toast.error('Google Login Failed');
                }}
                size="large"
                shape="pill"
              />
            </div>
          </GoogleOAuthProvider>

          {isLoading && (
            <div className="mt-4 flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link href="/Signin" className="text-purple-600 hover:text-pink-600 transition-colors duration-300 font-semibold"
            >
              Don't have an account? Signup
            </Link>
          </div>
        </div>
      </div>
      
      <ToastContainer/>
    </div>
  );
}