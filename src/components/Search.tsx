import React from 'react'

export default function Search() {
  return (
    <div className="flex flex-col">
      <div className="relative pt-6 flex-row  self-center">
        <span className="absolute inset-y-0 left-0 top-6 pl-2 flex items-center">
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
        <input
          className=" border p-2 pl-10 outline-none rounded-lg w-480 focus:border-blue-500 focus:shadow-outline"
          type="text"
          placeholder="O que está procurando?"
        />
      </div>
    </div>
  )
}
