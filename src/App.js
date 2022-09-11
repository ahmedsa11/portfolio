import React from "react";
import "./App.css";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Land from "./components/landing/land";
import Project from "./components/projects/project";
import Skills from "./components/skills/skills";
function App() {
  return (
    <>
      <Land />
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
