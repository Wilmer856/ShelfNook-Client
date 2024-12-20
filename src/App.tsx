import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Discover" element={<Discover />}/>
    </Routes>
  );
}

export default App;
