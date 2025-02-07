import myimage from "./btkitll.png";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="w-full bg-gradient-to-br from-purple-50 to-indigo-100 text-white py-12 mt-[100px] sm:mt-[350px] z-50 lg:mt-[600px]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="h-[70px] w-[70px] flex justify-around">
                            <Image src={myimage} className="h-full w-full rounded-full" alt="my_img" />
                        </div>
                        <h1 className="font-bold text-[30px] text-blue-600 hover:cursor-pointer">
                            BTKIT <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent hover:border-b-2 border-orange-500'>Springs</span>
                        </h1>
                    </div>
                    <p className="text-gray-800 max-w-[300px]">
                    BTKIT is an engineering college at the foot of the Himalayas, surrounded by beautiful mountains.                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold text-blue-600">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-900 hover:text-purple-700">Home</a></li>
                        <li><a href="#" className="text-gray-900 hover:text-purple-700">Services</a></li>
                        <li><a href="#" className="text-gray-900 hover:text-purple-700">Portfolio</a></li>
                        <li><a href="#" className="text-gray-900 hover:text-purple-700">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold text-blue-600">Contact Us</h2>
                    <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-gray-800" />
                        <a href="mailto:info@freelancinghub.com" className="text-gray-900 hover:text-purple-800">mohitsati.eth@gmail.com</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-gray-800" />
                        <a href="tel:+91 7417835639" className="text-gray-800 hover:text-purple-800">+91 7417835639</a>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold text-blue-600">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link href={"https://github.com/SuperexMack"}><span className="text-gray-800 hover:text-pink-600 hover:cursor-pointer"><Github className="h-6 w-6 hover:animate-spin"/></span></Link>
                        <Link href={"https://www.instagram.com/dp_127.0.0.1/?next=%2F"}><span className="text-gray-800 hover:text-pink-600"><Instagram className="h-6 w-6 hover:animate-spin"/></span></Link>
                        <Link href={"https://www.linkedin.com/in/mohitsatilinks/"}><span className="text-gray-800 hover:text-pink-600"><Linkedin className="h-6 w-6 hover:animate-spin"/></span></Link>
                        <Link href={"https://x.com/mohitsatitwt"}><span className="text-gray-800 hover:text-pink-600"><Twitter className="h-6 w-6 hover:animate-spin"/></span></Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-800">
                <p>&copy; {new Date().getFullYear()} Freelancing Hub. All rights reserved.</p>
            </div>
        </footer>
    );
}