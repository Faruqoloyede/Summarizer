import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="bg-sidebar h-screen flex-1 pt-12 max-w-full">
      <div className="mx-auto px-6 sm:px-24 flex flex-col items-center justify-center">
        <img src="/Logo.svg" alt="logo" className="w-24 mb-10" />

        <h4 className="text-white sm:text-3xl text-2xl font-bold text-center mb-6">
          Create your account
        </h4>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-y-4"
        >
          <div>
            <input
              type="text"
              {...register("firstName", { required: "Full name is required" })}
              placeholder="Full Name"
              className="w-full border border-[#DAFAFA] bg-para rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <button
            type="submit"
            className="w-full bg-button cursor-pointer text-[#0E2E2E] font-medium font-poppins py-4 rounded-md hover:bg-opacity-90 transition duration-200"
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
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-button cursor-pointer underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
