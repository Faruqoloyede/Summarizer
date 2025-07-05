import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type FormData = {
  firstName: string;
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
  };

  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
  });

  return (
    <div className="bg-sidebar h-screen flex-1 pt-12 max-w-full">
      <div className="mx-auto px-6 sm:px-24 flex flex-col items-center justify-center">

        {/* Logo */}
        <motion.img
          src="/Logo.svg"
          alt="logo"
          className="w-24 mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Heading */}
        <motion.h4
          className="text-white sm:text-3xl text-2xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome back
        </motion.h4>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-y-4"
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp(0.3)}>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
              placeholder="Email Address"
              className="w-full border border-[#DAFAFA] bg-para rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp(0.4)}>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Password"
              className="w-full border border-[#DAFAFA] bg-para rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-button cursor-pointer text-[#0E2E2E] font-medium font-poppins py-4 rounded-md hover:bg-opacity-90 transition duration-200"
            variants={fadeInUp(0.5)}
          >
            Sign in
          </motion.button>
        </motion.form>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-2 my-5"
          variants={fadeInUp(0.6)}
          initial="initial"
          animate="animate"
        >
          <div className="h-[0.5px] sm:w-32 w-24 bg-gray-700" />
          <span className="text-sm text-gray-400">Or continue with</span>
          <div className="h-[0.5px] sm:w-32 w-24 bg-gray-700" />
        </motion.div>

        {/* Google Button */}
        <motion.div
          className="bg-white w-full rounded-md flex items-center justify-center gap-x-3 py-4 px-4"
          variants={fadeInUp(0.7)}
          initial="initial"
          animate="animate"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </motion.div>

        {/* Bottom Link */}
        <motion.p
          className="text-gray-300 text-sm mt-6"
          variants={fadeInUp(0.8)}
          initial="initial"
          animate="animate"
        >
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-button cursor-pointer underline">Signup</span>
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default SignIn;
