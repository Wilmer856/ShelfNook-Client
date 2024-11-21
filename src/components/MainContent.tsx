import React from 'react'

export default function MainContent() {
  return (
    <div className="p-4 col-span-12 lg:col-span-7">
      {/* Search Bar */}
      <div className="mb-4">
        <label className="flex items-center gap-2 bg-[#f0eee2] rounded-md p-2">
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Search book name, author, edition..."
          />
        </label>
      </div>

      {/* Content */}
      <div className="text-[#1a1f2b] flex flex-col gap-8 p-4">
        <h1 className="text-4xl font-[Merriweather]">Happy Reading, <br/>William</h1>
        <p className="w-[60ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit maiores adipisci dolore, placeat facere tenetur aspernatur similique magnam quisquam officiis accusamus soluta nemo reprehenderit.</p>
        <button className="bg-[#1a1f2b] text-cyan-50 w-36 h-8 rounded-xl">Explore</button>
        <div>
          <h2 className="font-[Merriweather] text-xl md:text-2xl mb-4">
            Popular Now
          </h2>
          <div className="carousel flex gap-4 overflow-x-auto pb-2">
            {/* Carousel Items */}
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="carousel-item flex flex-col items-center w-24 md:w-32"
              >
                <img
                  src={`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`}
                  alt={`Book ${idx}`}
                  className="book-shadow w-full h-32 object-cover rounded-md"
                />
                <p className="text-xs md:text-sm mt-2">Lorem ipsum</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-[Merriweather] text-xl md:text-2xl mb-4">
            New Series Collection
          </h2>
          <p className="text-sm md:text-base">
            Discover our latest additions to the collection!
          </p>
        </div>
      </div>
    </div>
  )
}