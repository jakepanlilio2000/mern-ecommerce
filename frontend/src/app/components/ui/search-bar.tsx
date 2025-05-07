import React from "react";

function SearchBar() {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          className="w-full bg-primary placeholder:text-third text-black text-sm border border-black rounded-full pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search"
        />
        <button
          className="absolute top-1 right-1 flex items-center rounded bg-transparent py-1.5 border border-transparent text-center text-sm text-third transition-all  focus:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
