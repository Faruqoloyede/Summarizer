"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase"; // your firebase config
import { useAuth } from "@/context/AuthContext"; // custom context

type FormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { login, user, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  // handle google login
  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle();
      const user = result.user;

      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          name: user.displayName || "No name",
          email: user.email,
          createdAt: new Date(),
        },
        { merge: true }
      );

      toast.success("Signed in with Google");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message || "Google login failed");
    }
  };

  // handle form login
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
      toast.success("Logged in successfully");
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error);
      toast.error("Failed to log in");
    } finally {
      setLoading(false);
    }
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
          {/* Email */}
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
              className="w-full border border-[#DAFAFA] bg-[#DAFAFA] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          {/* Password */}
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
              className="w-full border border-[#DAFAFA] bg-[#DAFAFA] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-button cursor-pointer text-[#0E2E2E] font-medium font-poppins py-4 rounded-md hover:bg-opacity-90 transition duration-200 flex items-center justify-center"
            variants={fadeInUp(0.5)}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-[#0E2E2E]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                <span>Signing In...</span>
              </div>
            ) : (
              "Sign In"
            )}
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
          className="bg-white w-full cursor-pointer rounded-md flex items-center justify-center gap-x-3 py-4 px-4"
          variants={fadeInUp(0.7)}
          initial="initial"
          animate="animate"
          onClick={handleGoogleLogin}
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
          Don&apos;t have an account?{" "}
          <Link href="/register">
            <span className="text-button cursor-pointer underline">Signup</span>
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
