import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default function UserHeader() {
  return (
    <div className="hidden lg:flex flex-wrap items-center justify-between mb-4 gap-4 col-span-12 lg:col-span-5">
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar placeholder"
            >
              <div className="bg-[#2a323c] text-[#6b7280] w-10 rounded-full">
                <span className="text-xl">WJ</span>
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
            <FontAwesomeIcon icon={faBell} size="xl"/>
            <span className="badge badge-xs badge-primary bg-blue-600 border-none indicator-item"></span>
          </div>
        </button>
      </div>
  )
}
