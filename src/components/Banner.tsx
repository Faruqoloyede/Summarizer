import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-[#0E2E2E] h-screen pt-12 flex-1 max-lg:hidden">
      <div className="mx-auto px-12">
        <Link to="/">
          <div className="flex items-center text-para gap-2">
            <IoMdArrowBack className="text-2xl" />
            <span>Back</span>
          </div>
        </Link>

        <div className="mt-32 flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins font-bold text-center text-[48px] leading-tight text-white capitalize"
          >
            Let’s Get You Signed Up
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-para text-center my-4 max-w-lg mx-auto lg:mx-0"
          >
            Empowering smarter note-taking with AI — organize, summarize, and focus on what truly matters.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
