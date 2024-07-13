import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Attendance Portal</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search here..."
          className="px-2 py-1 rounded mr-2"
        />
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/30"
            alt="Admin"
            className="rounded-full"
          />
          <span className="ml-2">Admin</span>
        </div>
      </div>
    </header>
  );
}
