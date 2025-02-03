import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <div className="absolute inset-0 w-full h-full">
          <div className="h-full w-full grid grid-cols-[repeat(24,1fr)] gap-1 md:gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border-r border-gray-800/40 h-full"></div>
            ))}
          </div>
          <div className="absolute inset-0">
            <div className="h-full w-full grid grid-rows-[repeat(24,1fr)] gap-1 md:gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border-b border-gray-800/40 w-full"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full min-h-[500px] md:h-[700px] mt-[130px] md:mt-[150px] flex flex-col justify-center items-center space-y-4 md:space-y-8 px-4 md:px-0">
          <div className="w-full md:w-[70%] p-2 md:p-3">
            <h1 className="font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center">
              Welcome to the{" "}
              <span className="bg-gradient-to-r from-violet-700 via-purple-700 to-orange-500 bg-clip-text text-transparent">
                Notes Hub
              </span>{" "}
              of Btkit
            </h1>
          </div>
          <div className="w-full sm:w-[80%] md:w-[50%] px-4 md:px-0">
            <p className="text-center text-base md:text-[20px] font-semibold">
              This site will provide you with the notes of each and every subject
              uploaded by the college student and faculty and excel in your exams
            </p>
          </div>
          <div className="w-full sm:w-[80%] md:w-[50%] flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 px-4 md:px-0">
            <button className="bg-purple-700 z-10 transition-transform duration-300 hover:scale-110 p-2 w-full sm:w-[30%] font-bold text-xl md:text-[30px] rounded-lg text-white">
              Explore
            </button>
            <button className="p-2 bg-slate-700 z-10 transition-transform duration-300 hover:scale-110 w-full sm:w-[30%] text-xl md:text-[30px] border-2 border-red-600 text-slate-300 font-bold">
              Join us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}