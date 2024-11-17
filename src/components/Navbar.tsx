import React from "react";
import Sidebar from "./Sidebar";

export default function () {
  return (
    <>
      <div className="flex-[3] p-4">
        <div className="flex-1">
          <label className="input input-md flex items-center gap-2 md:w-72 text-md bg-[#f0eee2] text-[#838385] border-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Search book name, author, edition..."
            />
          </label>
        </div>
        <h1 className="text-[#242730] text-5xl font-serif">
          Happy Reading, <br />
          Harvey
        </h1>
        <p className="text-balance text-[#242730]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          nihil incidunt aspernatur error nobis, tempora asperiores id beatae
          nesciunt ducimus?
        </p>
      </div>

      <div className="flex-[2] p-4 bg-[#fdfcf7]">
        <div className="flex gap-2 items-center justify-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
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
          <div className="text-nowrap text-[#242730]">
            <span>William Jones</span>
          </div>
          <div className="">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="#242730"
                  viewBox="0 0 24 24"
                  stroke="#242730"
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
        </div>
      </div>
    </>
  );
}
