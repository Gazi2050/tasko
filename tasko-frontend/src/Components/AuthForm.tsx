"use client"

import { useForm, type SubmitHandler } from "react-hook-form"
import { loginImg, signupImg } from "../Constants/data"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router"

type AuthType = "login" | "signup"

type FormValues = {
    fullName?: string
    email: string
    password: string
    confirmPassword: string
}

type AuthFormProps = {
    auth: AuthType
}

const passwordValidation = {
    required: "Password is required",
    pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&]).{8,}$/,
        message: "Password must be 8+ chars, include one letter, one number, and one special (@#$%&)",
    },
}

const AuthForm = ({ auth }: AuthFormProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>()

    const [passwordVisibility, setPasswordVisibility] = useState({ password: false, confirmPassword: false })

    const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
        setPasswordVisibility(prev => ({ ...prev, [field]: !prev[field] }))
    }

    const passwordValue = watch("password")

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
            <div className="flex w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-md">
                {/* Left image */}
                <div className="hidden lg:w-1/2 bg-gradient-to-b from-emerald-900 to-emerald-700 lg:block">
                    <img
                        src={auth === 'signup' ? signupImg : loginImg}
                        alt="Signup Illustration"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Form */}
                <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2 sm:p-12">
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2">{auth === "signup" ? "Sign Up" : "Log In"}</h2>
                            <p className="text-gray-500 text-sm">
                                {auth === "signup"
                                    ? "To Create Account, Please Fill in the Form Below."
                                    : "Welcome back! Please login to your account."}
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
                                        {...register("fullName", { required: "Full Name is required" })}
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
                                    {...register("email", { required: "Email is required" })}
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
                                        {...register("password", passwordValidation)}
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
                                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                            </div>

                            {auth === "signup" && (
                                <div>
                                    <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                                    <div className="relative">
                                        <input
                                            type={passwordVisibility.confirmPassword ? "text" : "password"}
                                            placeholder="Retype password"
                                            className="w-full bg-white shadow-sm rounded border border-gray-300 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                            {...register("confirmPassword", {
                                                required: "Confirm Password is required",
                                                validate: (value) =>
                                                    value === passwordValue || "Passwords do not match",
                                            })}
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
                                        <Link to='/login' className="font-semibold text-black hover:underline">
                                            Log In
                                        </Link>
                                    </p>
                                ) : (
                                    <p className="text-gray-500">
                                        Don't have an account?{" "}
                                        <Link to='/signup' className="font-semibold text-black hover:underline">
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
