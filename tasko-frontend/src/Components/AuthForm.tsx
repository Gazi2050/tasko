import { useForm, SubmitHandler } from "react-hook-form";
import { signupImg } from "../Constants/data";

type AuthType = "login" | "signup";

type FormValues = {
    fullName?: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type AuthFormProps = {
    auth: AuthType;
};

const AuthForm = ({ auth }: AuthFormProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    const passwordValue = watch("password");

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
            <div className="flex flex-col sm:flex-row w-full max-w-6xl rounded-lg bg-white shadow-md overflow-hidden">
                {/* Left image */}
                <div className="hidden sm:flex sm:w-1/2 items-center justify-center bg-black">
                    <img
                        src={signupImg}
                        alt="Signup Illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Form */}
                <div className="w-full sm:w-1/2 p-6 sm:p-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                        {auth === "signup" ? "Sign Up" : "Log In"}
                    </h2>
                    <p className="text-gray-500 mb-6 text-sm sm:text-base">
                        {auth === "signup"
                            ? "To Create Account, Please Fill in the Form Below."
                            : "Welcome back! Please login to your account."}
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {auth === "signup" && (
                            <div>
                                <label className="block mb-1 text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                                    {...register("fullName", { required: "Full Name is required" })}
                                />
                                {errors.fullName && (
                                    <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
                                )}
                            </div>
                        )}

                        <div>
                            <label className="block mb-1 text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full rounded border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="************"
                                className="w-full rounded border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&]).{8,}$/,
                                        message:
                                            "Password must be 8+ chars, include one letter, one number, and one special (@#$%&)",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        {auth === "signup" && (
                            <div>
                                <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Retype password"
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                                    {...register("confirmPassword", {
                                        required: "Confirm Password is required",
                                        validate: (value) =>
                                            value === passwordValue || "Passwords do not match",
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
                                )}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full rounded bg-green-400 py-2 font-semibold text-white hover:bg-green-500 transition"
                        >
                            {auth === "signup" ? "Sign Up" : "Login"}
                        </button>

                        <div className="my-4 flex items-center">
                            <div className="flex-grow border-t border-gray-300" />
                            <span className="mx-2 text-sm text-gray-500">Or</span>
                            <div className="flex-grow border-t border-gray-300" />
                        </div>

                        <div className="text-center text-sm">
                            {auth === "signup" ? (
                                <p>
                                    Already have an account?{" "}
                                    <a href="#" className="font-semibold text-black underline">
                                        Log In
                                    </a>
                                </p>
                            ) : (
                                <p>
                                    Don’t have an account?{" "}
                                    <a href="#" className="font-semibold text-black underline">
                                        Sign Up
                                    </a>
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
