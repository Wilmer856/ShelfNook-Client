import React from "react";

export default function MainReadingContent() {
  return (
    <div className="p-4 bg-[#fdfcf7] col-span-12 lg:col-span-5 text-[#1a1f2b]">
      {/* Profile and Notifications (Desktop Only) */}
      <div className="hidden lg:flex flex-wrap items-center justify-between mb-4 gap-4">
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <span className="text-sm md:text-base">William Jones</span>
        </div>

        {/* Notifications */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
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
          <span className="ml-auto text-sm md:text-base italic">
            - JK Rowling
          </span>
        </div>
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
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <div key={index} className="p-3 hover:bg-[#f0eee2] rounded-2xl">
                  <button className="flex flex-col items-center">
                    <p className="text-xs md:text-sm">{day}</p>
                    <p className="text-xs md:text-sm">{11 + index}</p>
                  </button>
                </div>
              )
            )}
          </div>
          <div className="mt-4">
            <h2 className="font-[Merriweather] text-lg md:text-2xl mb-4">
              Reader Friends
            </h2>
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className="flex p-2">
                  <div className="divider divider-horizontal divider-start">
                    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5" cy="5" r="5" fill="#f0eee2" />
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Friend Avatar"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-2">Anna Henry</h5>
                      <p className="text-xs md:text-base italic mb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Esse minima ad tenetur, rem nostrum dolore?
                      </p>
                      <div className="flex">
                        <span className="text-red-700 line-through">
                          Chapter Five: Diagon Alley
                        </span>
                        <span className="ml-auto text-xs md:text-sm">
                          2 min ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
