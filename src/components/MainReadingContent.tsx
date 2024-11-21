import React from 'react'

export default function 
() {
  return (
    <div className="p-4 bg-[#fdfcf7] col-span-12 lg:col-span-5 text-[#1a1f2b]">
      <div className="flex items-center justify-between mb-4">
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full"
          />
          <span>William Jones</span>
        </div>
        {/* Notifications */}
        <button className="p-2 bg-gray-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15 17h5l-1.405-1.405..." />
          </svg>
        </button>
      </div>

      {/* Additional Content */}
      <div>
        <div>
            <h3 className="font-[Merriweather] text-3xl md:text-2xl mb-4 ">The Chamber of Secrets</h3>
            <span>
                <span className="text-red-700">154</span>
                /300 pages
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia laudantium consequuntur nam sunt aut numquam.</p>
            <span>- JK Rowlings</span>
        </div>
        <div>
            <h2 className="font-[Merriweather] text-xl md:text-2xl mb-4">Scheduled Reading</h2>
        </div>
      </div>
    </div>
  )
}
