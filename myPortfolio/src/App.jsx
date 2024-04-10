import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Profile/Hero";
import About from "./components/About/About";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
