import React from 'react'

export default function MainReadingContent() {
  return (
    <div className="p-4 bg-[#fdfcf7] col-span-12 lg:col-span-5 text-[#1a1f2b]">
      {/* Profile and Notifications */}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full"
          />
          <span className="text-sm md:text-base">William Jones</span>
        </div>
        {/* Notifications */}
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
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

      {/* Main Content */}
      <div className="flex flex-col gap-8 p-4">
        {/* Book Details */}
        <div className="flex flex-col gap-4">
          <h3 className="font-[Merriweather] text-2xl md:text-3xl mb-4">
            The Chamber of Secrets
          </h3>
          <span className="text-sm md:text-base">
            <span className="text-red-700 font-bold">154</span> / 300 pages
          </span>
          <p className="text-sm md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            laudantium consequuntur nam sunt aut numquam.
          </p>
          <span className="ml-auto text-sm md:text-base italic">- JK Rowling</span>
        </div>

        {/* Scheduled Reading */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-[Merriweather] text-lg md:text-2xl">
              Scheduled Reading
            </h2>
            <div className="ml-auto flex gap-2">
              <button className="btn-circle hover:bg-[#f0eee2]">❮</button>
              <button className="btn-circle hover:bg-[#f0eee2]">❯</button>
            </div>
          </div>

          {/* Days of the Week */}
          <div className="flex justify-around overflow-x-auto gap-2 mt-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div key={index} className="p-3 hover:bg-[#f0eee2] rounded-2xl">
                <button className="flex flex-col items-center">
                  <p className="text-xs md:text-sm">{day}</p>
                  <p className="text-xs md:text-sm">{11 + index}</p>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="font-[Merriweather] text-lg md:text-2xl">Reader Friends</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
