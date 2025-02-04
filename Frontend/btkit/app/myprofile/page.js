import Image from "next/image"
import google from "../(Auth)/googleimg.png"

export default function Profile() {
  return (
    <div className="min-h-screen w-full  flex items-center justify-center p-4">
      <div className="bg-white z-10 w-full max-w-6xl mt-20 flex flex-col lg:flex-row justify-between rounded-lg shadow-xl">
        <div className="bg-gray-900 shadow-2xl w-full lg:w-[30%] p-6 flex flex-col items-center space-y-7 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
          <div className="h-[130px] w-[130px]">
            <Image
              src={google}
              className="w-full h-full mt-4 rounded-full border-4 border-white"
              alt="Profile picture"
            />
          </div>
          
          <div className="bg-gray-800 shadow-lg w-full p-4 rounded-lg">
            <div className="space-y-4">
              <h1 className="font-bold text-2xl lg:text-3xl text-center text-slate-400">
                Name: <span className="block lg:inline">Mohit Sati</span>
              </h1>
              <h1 className="font-bold text-lg lg:text-xl text-center text-slate-400">
                Email: <span className="block lg:inline break-all">flux7500560@gmail.com</span>
              </h1>
              <h1 className="font-bold text-lg lg:text-xl text-center text-slate-400">
                Year: <span>3</span>
              </h1>
              <h1 className="font-bold text-lg lg:text-xl text-center text-slate-400">
                Branch: <span>Computer Science</span>
              </h1>
            </div>
          </div>
          
          <div className="bg-slate-800 p-4 rounded-lg w-full">
            <div className="flex flex-col items-center space-y-5 text-white">
              <h1 className="font-bold text-lg lg:text-xl text-center">Total Contributions - 20</h1>
              <h1 className="font-bold text-lg lg:text-xl text-center">Rating - Newbie</h1>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 w-full lg:w-[70%] h-[800px] flex flex-col space-y-3 items-center rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
          <h1 className="text-center font-bold text-2xl lg:text-3xl text-slate-500 pb-2 mt-3 border-b-2 border-purple-700">
            Your Contributions
          </h1>
          
          <div className="bg-gray-800 w-[90%] h-full overflow-y-scroll space-y-3 flex flex-col items-center">
            <div className="w-[80%] h-auto p-2  flex flex-col items-center space-y-3 mt-2 rounded-lg">
              <div className="bg-slate-700 w-[60%] h-[100px] mt-4 rounded-lg"></div>
              <h1 className="font-medium text-lg lg:text-xl text-white">
                Title: Compiler Design notes
              </h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}