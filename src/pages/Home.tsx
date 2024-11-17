import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen bg-[#f0eee2]">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex flex-1">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
