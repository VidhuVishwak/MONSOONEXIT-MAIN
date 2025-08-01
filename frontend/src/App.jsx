import { useState } from "react";
import Home from "./components/Home";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />

      </Routes>
    </>
  );
}

export default App;
