import React from "react";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-50">
      <div className="flex flex-col bg-amber-300 text-amber-50 rounded-2xl p-6 max-w-sm shadow-lg">
        <div className="flex flex-col items-center">
          <img
            alt="User avatar"
            src="/ddlogo.jpg"
            className="w-[100px] h-[100px] rounded-full"
          />
          <h2 className="text-xl font-semibold mt-3">Firagos Jemal</h2>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm mb-4">
            This is the challenge from ChatGPT. I finally finished it!
          </p>
          <button className="px-6 py-3 bg-amber-50 text-amber-300 hover:bg-amber-200 hover:text-amber-600 transition duration-300 rounded-2xl">
            ChatGPT
          </button>
        </div>
      </div>
    </div>
  );
}
