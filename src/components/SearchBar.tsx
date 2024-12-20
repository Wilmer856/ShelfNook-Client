import React from 'react'

export default function SearchBar() {
  return (
    <div className="col-span-12 lg:col-span-7 mb-4">
        <label className="flex items-center gap-2 bg-[#f0eee2] rounded-md p-2">
          <input
            type="text"
            className="w-full bg-transparent outline-none text-sm md:text-base"
            placeholder="Search book name, author, edition..."
          />
        </label>
      </div>
  )
}
