"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSignup(e) {
        e.preventDefault();

        setError("");
        setLoading(true);

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            setLoading(false);
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,

            options: {
                data: {
                    username,
                    display_name: displayName,
                },
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        /*
          If email confirmation is enabled in Supabase,
          session will be null until the user confirms their email.
        */

        if (!data.session) {
            router.push("/login?message=check-email");
            return;
        }

        router.push("/dashboard");
        router.refresh();
    }

    return (
        <main className="min-h-screen bg-[#08080c] text-white flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-8">

                    <h1 className="text-4xl font-bold tracking-tight">
                        LIFE<span className="text-purple-500">RPG</span>
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Your real life. Your RPG.
                    </p>

                </div>

                {/* Card */}
                <div className="bg-[#111118] border border-white/10 rounded-2xl p-6 shadow-2xl">

                    <h2 className="text-2xl font-semibold mb-1">
                        Create your hero
                    </h2>

                    <p className="text-sm text-gray-400 mb-6">
                        Start your journey and level up your real life.
                    </p>

                    <form onSubmit={handleSignup} className="space-y-5">

                        {/* Username */}
                        <div>

                            <label className="block text-sm text-gray-300 mb-2">
                                Username
                            </label>

                            <input
                                type="text"
                                placeholder="shadow_warrior"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                minLength={3}
                                maxLength={30}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 transition placeholder:text-gray-600"
                            />

                        </div>

                        {/* Display name */}
                        <div>

                            <label className="block text-sm text-gray-300 mb-2">
                                Display name
                            </label>

                            <input
                                type="text"
                                placeholder="Shubham"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                required
                                maxLength={50}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 transition placeholder:text-gray-600"
                            />

                        </div>

                        {/* Email */}
                        <div>

                            <label className="block text-sm text-gray-300 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="hero@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 transition placeholder:text-gray-600"
                            />

                        </div>

                        {/* Password */}
                        <div>

                            <label className="block text-sm text-gray-300 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 transition placeholder:text-gray-600"
                            />

                        </div>

                        {/* Error */}
                        {error && (
                            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition"
                        >
                            {loading ? "Creating hero..." : "Begin Journey"}
                        </button>

                    </form>

                    {/* Login */}
                    <p className="text-center text-sm text-gray-400 mt-6">

                        Already have an account?{" "}

                        <Link
                            href="/login"
                            className="text-purple-400 hover:text-purple-300"
                        >
                            Enter the realm
                        </Link>

                    </p>

                </div>
            </div>

        </main>
    );
}