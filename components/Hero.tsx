'use client'
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative h-screen bg-feature  bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 pt-32 flex max-lg:flex-col items-center justify-between gap-10">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight text-white capitalize">
            AI-Powered Notes. Organize and Summarize in Seconds
          </h1>
          <p className="text-base text-para my-4 max-w-lg mx-auto lg:mx-0">
           Upload notes, documents, or PDFs and let AI generate concise, readable summaries in seconds. Save time. Stay focused. Learn smarter.
          </p>
          <Button title="Get Started" to="/register" />
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/hero.png"
            alt="hero"
            className="w-[300px] sm:w-[360px] md:w-[440px] lg:w-[500px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
