import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";



type FormData = {
  firstName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {loginWithGoogle, signUp} = useAuth();
  const navigate = useNavigate();
  const [loading, setloading] =useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();


  const handleGoogleLogin = async ()=>{
    loginWithGoogle()
    navigate('/dashboard')
  }

  
  const onSubmit = async (data: FormData) => {
    setloading(true)
    try{
      const userCredential = await signUp(data.email, data.password);
      const user = userCredential.user
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: data.firstName,
        email: data.email,
        createdAt: new Date()
      })
      toast.success("Account created successfully")
      navigate('/login')
    }catch(error){
      console.log(error)
    }finally{
      setloading(false)
      reset()
    }
  };
  
  const fadeInUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="bg-sidebar h-screen flex-1 pt-12 max-w-full">
      <div className="mx-auto px-6 sm:px-24 flex flex-col items-center justify-center">
        <motion.img
          src="/Logo.svg"
          alt="logo"
          className="w-24 mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h4
          className="text-white sm:text-3xl text-2xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Create your account
        </motion.h4>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-y-4"
          variants={fadeInUp(0.3)}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp(0.4)}>
            <input
              type="text"
              {...register("firstName", { required: "Full name is required" })}
              placeholder="Full Name"
              className="w-full border border-[#DAFAFA] bg-[#DAFAFA] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp(0.5)}>
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
              className="w-full border border-[#DAFAFA] bg-[#DAFAFA] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp(0.6)}>
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
              className="w-full border border-[#DAFAFA] bg-[#DAFAFA] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-button cursor-pointer text-[#0E2E2E] font-medium font-poppins py-4 rounded-md hover:bg-opacity-90 transition duration-200"
            variants={fadeInUp(0.7)}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </motion.button>
        </motion.form>

        <motion.div
          className="flex items-center gap-2 my-5"
          variants={fadeInUp(0.9)}
          initial="initial"
          animate="animate"
        >
          <div className="h-[0.5px] sm:w-32 w-24 bg-gray-700" />
          <span className="text-sm text-gray-400">Or continue with</span>
          <div className="h-[0.5px] sm:w-32 w-24 bg-gray-700" />
        </motion.div>

        <motion.div
          className="bg-white w-full cursor-pointer rounded-md flex items-center justify-center gap-x-3 py-4 px-4"
          variants={fadeInUp(1)}
          initial="initial"
          animate="animate"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="text-2xl" />
          Sign up with Google
        </motion.div>

        <motion.p
          className="text-gray-300 text-sm mt-6"
          variants={fadeInUp(1.1)}
          initial="initial"
          animate="animate"
        >
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-button cursor-pointer underline">Sign in</span>
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default SignUp;
