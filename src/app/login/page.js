"use client";

import Link from "next/link";
import { loginSchema } from "@/utils/userValidations";
import { useActionState, useState } from "react";
import { loginAction } from "../Actions/loginAction";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [stateError, setStateError] = useState("")
    const router = useRouter();

    const [state, formAction, isPending] = useActionState(loginAction, {})

    const handleLogin = async () => {

        const user = {
            email,
            password
        }

        const { success, data, error} = loginSchema.safeParse(user);

        if (!success) {
            const fieldErrors = error.flatten().fieldErrors;
            setError({
                email: fieldErrors.email?.[0] || "",
                password: fieldErrors.password?.[0] || ""
            });
            return
        }

        if (success) {
            await formAction(user)
        }


    }


    useEffect(() => {
     
        if (state.success) {
            
            router.push("/todos")

        }
        else {
            setStateError(state.message)

        }
    }, [state])







    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden relative">

            <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-pink-600/20 to-blue-700/20 blur-3xl animate-pulse" />


            <h1 className="text-5xl sm:text-6xl font-extrabold mb-12 text-center z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]">
                Login to TodoApp
            </h1>


            <form action={handleLogin}
                className="z-10 w-[90%] max-w-md bg-gray-900/40 border border-purple-700/40 rounded-2xl shadow-[0_0_40px_-10px_rgba(168,85,247,0.6)] p-10 backdrop-blur-md"
            >
                {/* Email */}
                <div className="mb-6">
                    <label className="block mb-2 text-gray-300 font-medium tracking-wide">
                        Email Address
                    </label>
                    <input
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-purple-500/40 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none text-white placeholder-gray-500 transition-all"
                    />
                    <h4 className="text-sm text-red-600">{error.email ? error.email : ""}</h4>
                    <h4 className="text-sm text-red-600">{stateError ? stateError : ""}</h4>
                </div>

                {/* Password */}
                <div className="mb-8">
                    <label className="block mb-2 text-gray-300 font-medium tracking-wide">
                        Password
                    </label>
                    <input
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-blue-500/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder-gray-500 transition-all"
                    />
                    <h4 className="text-sm text-red-600">{error.password ? error.password : ""}</h4>
                </div>


                <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-semibold tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.8)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)]"
                >
                    Login
                </button>


                <p className="text-center text-gray-400 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        href="/signup"
                        className="text-pink-400 hover:text-pink-300 font-semibold transition-all"
                    >
                        Sign up
                    </Link>
                </p>

                <p className="text-center text-sm mt-4">
                    <Link
                        href="/"
                        className="text-blue-400 hover:text-blue-300 transition-all"
                    >
                        ← Back to Home
                    </Link>
                </p>
            </form>

            {/* Footer */}
            <footer className="absolute bottom-6 text-gray-400 text-sm tracking-wide">
                © {new Date().getFullYear()} <span className="text-purple-400">TodoApp</span>
            </footer>
        </div>
    );
}