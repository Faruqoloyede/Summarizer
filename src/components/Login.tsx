import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-sidebar h-screen flex-1 pt-12 max-w-full">
      <div className="mx-auto px-6 sm:px-24 flex flex-col items-center justify-center ">
        <img src="/Logo.svg" alt="logo" className="w-24 mb-10" />
        
        <h4 className="text-white sm:text-3xl text-2xl font-bold text-center mb-6">
          Create your account
        </h4>

        <form className="w-full flex flex-col gap-y-4">
          <div >
            <input
              type="text"
              name="firstName"
              placeholder="Full Name"
              className="w-full border border-[#DAFAFA] bg-para rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
          </div>


          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-[#DAFAFA] bg-para rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-[#DAFAFA] bg-para rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-button text-[#0E2E2E] font-medium font-poppins py-4 rounded-md hover:bg-opacity-90 transition duration-200"
          >
           Create account
          </button>
        </form>
        <div className="flex items-center gap-2 my-5">
            <div className="h-[0.5px] sm:w-32 w-24 bg-gray-700" />
            <span className="text-sm text-gray-400">Or continue with</span>
            <div className="h-[0.5px] sm:w-32 w-24 bg-gray-700" />
        </div>

        <div className="bg-white w-full rounded-md flex items-center justify-center gap-x-3 py-4 px-4">
            <FcGoogle className="text-2xl" />
            Sign up with Google
        </div>

        <p className="text-gray-300 text-sm mt-6">
          Already have an account? <Link to="/login"><span className="text-button cursor-pointer underline">Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
