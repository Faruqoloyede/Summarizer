'use client'
import { features } from "@/constant";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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
      ease: "easeOut" as const, // Type-safe easing
    },
  },
};


const Features = () => {
  return (
    <section id="feature" className="relative sm:py-16 py-6 bg-gradient-to-b from-[#0E2E2E] to-[#061212]">
      <div className="container">
        <h4 className="sm:text-6xl text-3xl text-white text-center">
          Powerful Features to Help You<br />
          <span className="text-button">Learn</span> Smarter
        </h4>

        <motion.div
          className="grid sm:grid-cols-4 grid-cols-1 gap-10 text-white mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((item) => (
            <motion.div
              key={item.id}
              className="border-[1px] border-button flex flex-col items-center justify-center p-6 rounded-[16px]"
              variants={itemVariants}
            >
              <div className="bg-feature h-[72px] w-[72px] flex items-center justify-center rounded-md mb-4">
                <span className="text-[48px]">{item.icon}</span>
              </div>
              <h3 className="text-[20px] leading-[140%] text-center mb-2">{item.title}</h3>
              <p className="text-[16px] leading-[140%] text-center text-para px-4">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
