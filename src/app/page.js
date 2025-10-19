import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-white bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden">
      {/* Glowing Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-pink-600/20 to-blue-700/20 blur-3xl animate-pulse" />

      {/* Title */}
      <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 text-center z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]">
        Welcome to <br /> TodoApp
      </h1>

      {/* Subtitle */}
      <p className="text-xl sm:text-2xl text-gray-300 mb-12 text-center tracking-wide z-10">
        Manage your daily tasks with <span className="text-pink-400 font-semibold">style</span> &{" "}
        <span className="text-blue-400 font-semibold">clarity</span>.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-8 z-10">
        <Link
          href="/login"
          className="px-10 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-bold tracking-wide hover:scale-110 transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.8)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)]"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-lg font-bold tracking-wide hover:scale-110 transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.8)] hover:shadow-[0_0_40px_rgba(37,99,235,0.9)]"
        >
          Sign Up
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-400 text-sm tracking-wide">
        © {new Date().getFullYear()} <span className="text-purple-400">TodoApp</span> — Glow with productivity
      </footer>
    </div>
  );
}