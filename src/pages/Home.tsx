import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import MainReadingContent from "../components/MainReadingContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0eee2]">
      <div className="flex h-full">
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
