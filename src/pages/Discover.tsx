import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Discover() {
  return (
    <div className="min-h-screen bg-[#f0eee2]">
    {/* Mobile header */}
      <Header />

      {/* Layout Wrapper */}
      <div className="flex flex-col lg:flex-row h-full">
        {/* Sidebar */}
        <Sidebar />
        <div className="hidden lg:block w-[1px] bg-gray-300"></div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-12 gap-4 mb-8">
            <SearchBar />
            <UserHeader />
          </div>
          <div className="flex gap-40 mb-8">
            <div className="flex-1">
                <h1 className="text-4xl font-[Merriweather] mb-6">Keep the story going..</h1>
                <p>Don't let your story end just yet. See from a selection of books below and immerse yourself in the world of literature.</p>
            </div>
            <div className="flex-1">
                <div className="flex gap-4">
                    <div className="avatar mb-4">
                        <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">George RR Martin</h3>
                        <span className="text-[rgba(0,0,0,0.5)]">author</span>
                    </div>
                </div>
                <p className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi possimus et fugiat soluta totam quibusdam magnam aperiam accusamus atque, corrupti sed, deserunt consequatur veritatis excepturi architecto vel? Molestias corrupti ratione provident eos placeat. Perspiciatis, eveniet?</p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-auto">
                <button className="btn rounded-full border-gray-400 mr-2"><FontAwesomeIcon icon={ faArrowLeft as IconProp} className="" /></button>
                <button className="btn rounded-full border-gray-400"><FontAwesomeIcon icon={ faArrowRight as IconProp} className="" /></button>
            </div>
          </div>
          <div className="carousel bg-neutral max-w-full space-x-12 overflow-hidden p-16">
            <div className="carousel-item h-64 transition ease-in-out hover:scale-150 relative z-10 hover:z-20">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    className="rounded-box" />
            </div>
            <div className="carousel-item h-64 transition ease-in-out hover:scale-150 relative z-10 hover:z-20">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                    className="rounded-box" />
            </div>
            <div className="carousel-item h-64 transition ease-in-out hover:scale-150 relative z-10 hover:z-20">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item h-64 transition ease-in-out hover:scale-150 relative z-10 hover:z-20">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item h-64 transition ease-in-out hover:scale-150 relative z-10 hover:z-20">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item h-64 transition ease-in-out hover:scale-150 relative z-10 hover:z-20">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item h-64 transition ease-in-out hover:scale-150 relative z-10 hover:z-20">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="rounded-box" />
            </div>
        </div>
    </div>
        
    </div>
    </div>
  )
}
