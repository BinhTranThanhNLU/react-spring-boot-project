import React from "react";
import "./App.css";
import { Header } from "./layouts/HeaderAndFooter/Header";
import { Footer } from "./layouts/HeaderAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { CategoryPage } from "./layouts/CategoryPage/CategoryPage";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


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
    <>
      <Header />
      <CategoryPage />
      <Footer />
    </>
  );
}

export default App;
