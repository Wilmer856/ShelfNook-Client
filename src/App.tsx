import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import View from "./pages/View";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Discover" element={<Discover />}/>
      <Route path="/View" element={<View />}/>
    </Routes>
  );
}

export default App;
