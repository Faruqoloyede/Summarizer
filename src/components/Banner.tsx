import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#0E2E2E] h-screen pt-12 flex-1 max-lg:hidden">
        <div className="mx-auto px-12 ">
            <Link to='/'>
                <div className=" flex items-center text-para gap-2">
                <IoMdArrowBack className="text-2xl" />
                <span>Back</span>
            </div>
            </Link>
            <div className="mt-32 flex flex-col items-center justify-center">
               
                <h2 className="font-poppins font-bold text-center text-[48px] leading-tight text-white capitalize">Lets Get You 
                Signed Up</h2>
                 <p className="text-base text-para text-center my-4 max-w-lg mx-auto lg:mx-0">Empowering smarter note-taking with AI, organize, summarize, and focus on what truly matters.</p>
            </div>
        </div>
    </div>
  )
}

export default Banner