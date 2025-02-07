import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import newSocial from "./newSocial.png";
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="w-full h-auto mt-[150px] flex flex-col text-center space-y-8 items-center">
        <div>
          <button className="font-bold bg-purple-100 text-purple-600 px-4 py-2 text-sm rounded-full shadow-lg hover:bg-purple-200 transition-all duration-300">
            Introducing BTKIT Springs
          </button>
        </div>

        <div className="w-[80%] flex justify-center items-center sm:w-[60%] md:w-[50%]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            A social media platform for <span className="text-purple-600">BTKIT students</span>
          </h1>
        </div>

        <div className="w-[80%] md:w-[50%]">
          <p className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-600">
            Welcome to the platform — Share notes, follow each other, post your photos, comment on posts, and more. Forget other social media and use BTKIT Springs!
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
            <span className="font-bold text-lg">Explore</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="w-[80%] h-[200px] md:flex md:justify-center md:items-center md:relative md:top-[250px]">
          <Image src={newSocial} alt="media_icon" className="rounded-lg shadow-2xl" />
        </div>

        <div className="w-full h-auto flex flex-col items-center sm:relative sm:top-[250px] md:top-[300px] lg:top-[500px]">
          <h1 className="mt-[50px] font-bold text-2xl sm:text-3xl text-gray-700">
            Want to connect with the developer?
          </h1>
          <div className="flex flex-col w-full lg:flex lg:items-center mt-8 p-8">
            <div className="w-full flex justify-around items-center lg:w-[30%]">
              <Link href={"https://github.com/SuperexMack"}><span>
                <Github className="h-12 w-12 animate-bounce cursor-pointer text-purple-700 hover:text-purple-800 transition-all duration-300" />
              </span>
              </Link>
              <Link href={"https://www.linkedin.com/in/mohitsatilinks/"}><span >
                <Linkedin className="h-10 w-10 animate-bounce cursor-pointer text-blue-700 hover:text-blue-800 transition-all duration-300" />
              </span>
              </Link>
            </div>
            <div className="w-full flex justify-center items-center mt-8 space-x-12">
              <Link href={"https://www.instagram.com/dp_127.0.0.1/?next=%2F"}><span>
                <Instagram className="h-12 w-12 animate-bounce cursor-pointer text-pink-600 hover:text-pink-700 transition-all duration-300" />
              </span>
              </Link>
              <Link href={"https://x.com/mohitsatitwt"}><span>
                <Twitter className="h-12 w-12 animate-bounce cursor-pointer text-blue-400 hover:text-blue-500 transition-all duration-300" />
              </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}