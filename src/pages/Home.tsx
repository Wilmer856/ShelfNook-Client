import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import MainReadingContent from "../components/MainReadingContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0eee2]">
      {/* Mobile Header */}
      <div className="lg:hidden bg-[#fdfcf7] p-4 flex items-center justify-between z-50">
        {/* Hamburger Menu */}
        <button className="p-2 rounded-md focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-4">
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
      </div>

      {/* Layout Wrapper */}
      <div className="flex flex-col lg:flex-row h-full">
        {/* Sidebar */}
        <Sidebar />
        <div className="hidden lg:block w-[1px] bg-gray-300"></div>

        {/* Main Content Area */}
        <div className="flex-1 grid grid-cols-12 gap-4">
          {/* Main Content */}
          <MainContent />
          {/* Reading Content */}
          <MainReadingContent />
        </div>
      </div>
    </div>
  );
}
