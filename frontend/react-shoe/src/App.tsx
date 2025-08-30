import React from "react";
import "./App.css";
import { Header } from "./layouts/HeaderAndFooter/Header";
import { Footer } from "./layouts/HeaderAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { CategoryPage } from "./layouts/CategoryPage/CategoryPage";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,   
      easing: "ease-in-out",
      once: true,      
      offset: 50,
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/category/:id" element={<CategoryPage />}/>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
