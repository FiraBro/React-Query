import React from "react";

export default function App() {
  return (
    <div className="flex h-screen bg-amber-50 items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-amber-600 w-3xs h-48">
        <h1 className="text-amber-50">
          TanStack
        </h1>
        <button className="bg-amber-50 text-amber-300 py-2 px-8 rounded-sm hover:bg-amber-800">Button</button>
      </div>
    </div>
  );
}
