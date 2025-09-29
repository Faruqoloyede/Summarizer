'use client'
import { works } from "@/constant";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Works = () => {
  return (
    <div id="works" className="relative bg-feature py-28">
      <div className="container">
        <h4 className="sm:text-5xl text-3xl text-white text-center capitalize">
          How it works
        </h4>
        <p className="text-center text-para">
          Get started in minutes with these three simple steps
        </p>

        <motion.div
          className="grid sm:grid-cols-3 grid-cols-1 gap-10 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {works.map((item, index) => (
            <motion.div
              key={index}
              className="relative border-[1px] border-button flex flex-col items-center justify-center p-6 rounded-[16px]"
              variants={itemVariants}
            >
              <div className="bg-button h-10 w-10 rounded-full absolute -top-5 sm:-left-5 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#0E2E2E]">{index + 1}</span>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-[20px] leading-[140%] text-white mb-2">{item.title}</h3>
                <p className="text-[16px] leading-[140%] text-para px-4">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
