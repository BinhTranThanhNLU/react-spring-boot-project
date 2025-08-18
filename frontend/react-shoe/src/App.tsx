import React from "react";
import "./App.css";
import { Header } from "./layouts/HeaderAndFooter/Header";
import { Footer } from "./layouts/HeaderAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";


function App() {
  return (
    <>
      <Header />
      <HomePage/>
      <Footer />
    </>
  );
}

export default App;
