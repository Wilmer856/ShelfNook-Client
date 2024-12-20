import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faList, faBookmark, faGear, faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="lg:hidden p-2 rounded-md focus:outline-none fixed top-4 left-4 z-50 bg-white shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
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
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative w-64 lg:w-20 h-screen bg-[#f0eee2] flex flex-col justify-between items-center p-4 transition-transform duration-300 ease-in-out z-40`}
        aria-label="Sidebar"
      >
        {/* Logo */}
        <div className="mb-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faBookOpen} size="2xl"/>
          </a>
        </div>

        {/* Navigation Items */}
        <ul className="flex flex-col items-center space-y-8">
          {[
            <FontAwesomeIcon icon={faHouse as IconProp} size="xl"/>,
            <FontAwesomeIcon icon={faList as IconProp} size="xl"/>,
            <FontAwesomeIcon icon={faBookmark as IconProp} size="xl"/>,
            <FontAwesomeIcon icon={faGear as IconProp} size="xl"/>,
          ].map((item, index) => (
            <li key={index}>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Additional Footer Area (Optional) */}
        <div></div>
      </aside>
      {/* Background Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
