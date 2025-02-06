import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import newSocial from "./newSocial.png"
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
export default function Home() {
  return (
    <>
    <div className="w-full min-h-screen flex flex-col">
        <div className="w-full h-auto mt-[150px] flex flex-col text-center  space-y-8 items-center">
          <div className="">
          <button className="font-bold bg-purple-200 text-purple-400 p-2 text-[15px] rounded-xl duration-300 hover:text-violet-500">Introducing BTKIT Springs</button>
          </div>
          
          <div className="w-[80%] flex justify-center items-center">
            <h1 className="text-[40px] text-center font-bold font-(cursive)">A social media platform for <span className="text-purple-600">BTKIT students</span></h1>
          </div>

          <div className="w-[80%]">
            <p className="text-center text-[20px] font-medium text-slate-500">Welcome to the platform --- Share notes , 
            Follow each other , post your photos,
            Comment on each other post. forget other social
            media and use BTKIT Springs 
              </p>
          </div>

          <div className="w-full flex justify-center items-center ">
            <div className="space-x-4 bg-purple-600 flex p-2 w-[70%] justify-center mt-[40px] items-center rounded-2xl transition-transform duration-300 hover:scale-75">
            <button className="text-white font-bold text-[20px]">Explore</button>
            <ArrowRight className="text-[20px] font-bold text-white"></ArrowRight>
            </div>
          </div>

          <div className="w-[80%] h-[200px]">
              <Image src={newSocial} alt="media_icon"></Image>
          </div>

          <div className="w-full h-auto flex flex-col items-center">
            <h1 className="mt-[50px] font-bold text-[23px] text-center text-slate-500">In case u wanna connect with developer</h1>
            <div className="flex space-y-4 flex-col w-full">
             <div className="w-full  flex justify-around items-center mt-[40px]">
                 <span><Github className="h-[50px] w-[50px]  cursor-pointer animate-bounce text-purple-700"></Github></span>
                 <span><Linkedin className="h-[40px] w-[40px] cursor-pointer animate-bounce text-blue-800"></Linkedin></span>
             </div>
             <div className="w-full  flex space-x-24 justify-center items-center mt-[40px]">
                 <span><Instagram className="h-[50px] w-[50px] cursor-pointer animate-bounce text-pink-600"></Instagram></span>
                 <span><Twitter className="h-[50px] w-[50px] cursor-pointer animate-bounce text-green-800"></Twitter></span>
             </div>
            </div>
          </div>
        
        </div>
    </div>
    </>
  );
}