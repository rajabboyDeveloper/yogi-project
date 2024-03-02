import React from "react";
import "./App.css";
import Navbar from "./components/layots/navbar/Navbar";
import Footer from "./components/layots/footer/Footer";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./components/pages/pricing/Pricing";
import About from "./components/pages/about/About";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
