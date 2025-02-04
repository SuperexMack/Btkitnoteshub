"use client"
import { Upload, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function() {
    const myRef = useRef(null)

    const changeRef = ()=>{
        myRef.current.click()
    }

    return (
        <>
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="min-h-screen w-full flex flex-col space-y-6 justify-center items-center z-10 px-4 py-8">
                <div className="w-full flex justify-center items-center flex-col space-y-6">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-[50px] mt-4 cursor-pointer animate-bounce text-violet-800">
                        Submit Notes 👇 <br className="md:hidden" />
                        <span className="text-xl md:text-2xl lg:text-3xl">(कोई इंतज़ार कर रहा है।)</span>
                    </h1>
                </div>
                <div className="w-full h-auto flex justify-center items-center">
                    <div className="bg-white shadow-2xl w-full md:w-[80%] lg:w-[50%] h-auto rounded-lg z-10 flex flex-col items-center space-y-7 p-4">
                        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col space-y-4 mt-5">
                            <div className="flex space-x-5">
                                <Sparkles className="text-lg md:text-[25px] mt-1 text-violet-600" />
                                <label className="text-lg md:text-[25px] font-bold text-violet-800">Title</label>
                            </div>
                            <input 
                                placeholder="Compiler Design" 
                                className="p-2 rounded-xl border-2 border-violet-300 focus:border-violet-500 focus:outline-none"
                            />
                        </div>

                        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col space-y-4">
                            <div className="flex space-x-5">
                                <Sparkles className="text-lg md:text-[25px] mt-1 text-violet-600" />
                                <label className="text-lg md:text-[25px] font-bold text-violet-800">Summary</label>
                            </div>
                            <textarea 
                                placeholder="Write summary here....." 
                                className="p-2 rounded-xl border-2 border-violet-300 focus:border-violet-500 focus:outline-none" 
                                rows={8}
                            />
                        </div>

                        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col space-y-4">
                            <div className="flex space-x-5">
                                <Sparkles className="text-lg md:text-[25px] mt-1 text-violet-600" />
                                <label className="text-lg md:text-[25px] font-bold text-violet-800">PDF Section</label>
                            </div>
                            <div className="flex w-full bg-violet-600 h-[50px] rounded-xl">
                                <button onClick={changeRef} className="bg-white rounded-xl w-full font-bold text-xl md:text-[30px] h-full text-violet-800 border-2 border-violet-300 hover:bg-violet-50 transition-colors">
                                    Enter PDF here
                                </button>
                            </div>
                        </div>

                        <input type='file' ref={myRef} className="hidden" />

                        <div className="w-full mt-8 flex justify-center">
                            <button className="bg-violet-600 p-4 w-full md:w-[80%] lg:w-[70%] rounded-xl text-lg md:text-[20px] text-white font-bold hover:bg-violet-700 transition-colors">
                                Submit Notes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    );
}