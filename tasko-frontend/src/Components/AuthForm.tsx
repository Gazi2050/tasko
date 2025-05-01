import { useForm, type SubmitHandler } from "react-hook-form"
import { loginImg, signupImg } from "../Constants/data"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router"
import { AuthFormProps, FormValues } from "../Constants/type"
import { getPasswordValidation } from "../Utils/getPasswordValidation"

const AuthForm = ({ auth }: AuthFormProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>()

    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        confirmPassword: false,
    })

    const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
        setPasswordVisibility((prev) => ({
            ...prev,
            [field]: !prev[field],
        }))
    }

    const passwordValue = watch("password")

    const passwordValidation = getPasswordValidation(passwordValue || "")

    const validation = {
        fullName: {
            required: "Full Name is required",
        },
        email: {
            required: "Email is required",
        },
        password: {
            required: "Password is required",
            ...(auth === "signup" && {
                pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&]).{8,}$/,
                    message: "Password must be 8+ chars, with a letter, number, and special char (@#$%&)",
                },
            }),
        },
        confirmPassword: {
            required: "Confirm Password is required",
            validate: (value: string | undefined) => {
                return value && value === passwordValue || "Passwords do not match";
            },
        },
    }

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const { ...submitData } = data
        console.log("Submitted:", submitData)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
            <div className="flex w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-md">
                {/* image */}
                <div className="hidden lg:w-1/2 bg-gradient-to-b from-emerald-900 to-emerald-700 lg:block">
                    <img
                        src={auth === "signup" ? signupImg : loginImg}
                        alt="Auth Illustration"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Form */}
                <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2 sm:p-12">
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2">{auth === "signup" ? "Sign Up" : "Login"}</h2>
                            <p className="text-gray-500 text-sm">
                                {auth === "signup"
                                    ? "To create an account, please fill in the form below."
                                    : "Welcome back! Please log in to your account."}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {auth === "signup" && (
                                <div>
                                    <label className="block mb-1 text-sm font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full bg-white shadow-sm rounded border border-gray-300 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                        {...register("fullName", validation.fullName)}
                                    />
                                    {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
                                </div>
                            )}

                            <div>
                                <label className="block mb-1 text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-white shadow-sm rounded border border-gray-300 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                    {...register("email", validation.email)}
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">Password</label>
                                <div className="relative">
                                    <input
                                        type={passwordVisibility.password ? "text" : "password"}
                                        placeholder="************"
                                        className="w-full bg-white shadow-sm rounded border border-gray-300 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                        {...register("password", validation.password)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => togglePasswordVisibility("password")}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        aria-label="Toggle password visibility"
                                    >
                                        {passwordVisibility.password ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.password && !passwordValue && (
                                    <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                                )}

                                {auth === "signup" && errors.password && (
                                    <ul className="mt-2 text-xs text-gray-600 space-y-1">
                                        <li className={passwordValidation.length ? "text-green-600" : "text-red-500"}>
                                            • At least 8 characters
                                        </li>
                                        <li className={passwordValidation.letter ? "text-green-600" : "text-red-500"}>
                                            • Contains a letter (A–Z)
                                        </li>
                                        <li className={passwordValidation.number ? "text-green-600" : "text-red-500"}>
                                            • Contains a number (0–9)
                                        </li>
                                        <li className={passwordValidation.specialChar ? "text-green-600" : "text-red-500"}>
                                            • Contains a special character (@#$%&)
                                        </li>
                                    </ul>
                                )}
                            </div>

                            {auth === "signup" && (
                                <div>
                                    <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                                    <div className="relative">
                                        <input
                                            type={passwordVisibility.confirmPassword ? "text" : "password"}
                                            placeholder="Retype password"
                                            className="w-full bg-white shadow-sm rounded border border-gray-300 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                            {...register("confirmPassword", validation.confirmPassword)}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => togglePasswordVisibility("confirmPassword")}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            aria-label="Toggle confirm password visibility"
                                        >
                                            {passwordVisibility.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
                                    )}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full rounded bg-emerald-400 py-3 font-semibold text-black hover:bg-emerald-500 transition"
                            >
                                {auth === "signup" ? "Sign Up" : "Login"}
                            </button>

                            <div className="flex items-center my-6">
                                <div className="flex-grow border-t border-gray-300" />
                                <span className="mx-4 text-sm text-gray-500">Or</span>
                                <div className="flex-grow border-t border-gray-300" />
                            </div>

                            <div className="text-center text-sm">
                                {auth === "signup" ? (
                                    <p className="text-gray-500">
                                        Already have an account?{" "}
                                        <Link to="/login" className="font-semibold text-black hover:underline">
                                            Log In
                                        </Link>
                                    </p>
                                ) : (
                                    <p className="text-gray-500">
                                        Don’t have an account?{" "}
                                        <Link to="/signup" className="font-semibold text-black hover:underline">
                                            Sign Up
                                        </Link>
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm
