
"use client";
import { useState } from "react";
import { CheckCircle, Trash2, Plus } from "lucide-react";

export default function TodosPage() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, { text: input, completed: false }]);
        setInput("");
    };

    const toggleTodo = (index) => {
        setTodos((prev) =>
            prev.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (index) => {
        setTodos((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white relative overflow-hidden px-4">
            {/* Glowing gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-pink-600/20 to-purple-700/20 blur-3xl animate-pulse" />

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(147,51,234,0.9)]">
                My Todos
            </h1>

            {/* Todo container */}
            <div className="w-full max-w-lg bg-gray-900/40 border border-blue-700/40 rounded-2xl shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] p-8 backdrop-blur-md z-10">
                {/* Add Todo */}
                <form
                    onSubmit={addTodo}
                    className="flex items-center gap-3 mb-8 border-b border-blue-500/30 pb-4"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add a new task..."
                        className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-purple-500/40 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none text-white placeholder-gray-500 transition-all"
                    />
                    <button
                        type="submit"
                        className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.8)] hover:shadow-[0_0_40px_rgba(37,99,235,0.9)]"
                    >
                        <Plus className="w-6 h-6" />
                    </button>
                </form>

                {/* Todo list */}
                <ul className="space-y-4">
                    {todos.length === 0 ? (
                        <p className="text-gray-400 text-center italic">No tasks yet 🌙</p>
                    ) : (
                        todos.map((todo, index) => (
                            <li
                                key={index}
                                className={`flex items-center justify-between px-4 py-3 rounded-lg border ${todo.completed
                                        ? "border-green-500/40 bg-green-900/30"
                                        : "border-blue-500/40 bg-black/40"
                                    } transition-all duration-300`}
                            >
                                <span
                                    onClick={() => toggleTodo(index)}
                                    className={`flex-1 cursor-pointer text-lg tracking-wide ${todo.completed
                                            ? "line-through text-gray-400"
                                            : "text-white"
                                        }`}
                                >
                                    {todo.text}
                                </span>

                                <div className="flex gap-3 items-center">
                                    <button
                                        onClick={() => toggleTodo(index)}
                                        className="text-green-400 hover:text-green-300 transition-all"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => deleteTodo(index)}
                                        className="text-pink-400 hover:text-pink-300 transition-all"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-6 text-gray-400 text-sm tracking-wide">
                © {new Date().getFullYear()} <span className="text-blue-400">TodoApp</span>
            </footer>
        </div>
    );
}