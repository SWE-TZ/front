"use client";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setLoading(true);
    // Simulate a search delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className="flex justify-center items-center h-auto py-10 bg-[#FBE4CC]">
      <div className="w-full max-w-md relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search ..."
          className="w-full p-4 pl-12 bg-[#1B262C] text-[#FBE4CC] rounded-full shadow-lg text-lg placeholder-[#FBE4CC] focus:outline-none focus:ring-2 focus:ring-[#FBE4CC] transition duration-300 ease-in-out"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FBE4CC]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </div>
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#FBE4CC] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
        {loading && (
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
            <svg
              className="animate-spin h-5 w-5 text-[#FBE4CC]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
