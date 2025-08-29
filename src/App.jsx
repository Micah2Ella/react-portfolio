import React, {useState} from 'react';
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <div class="navi">
            <div class="content">
                <p>《 Micah Ella Abril's Portfolio 》</p>
                <nav class="leftside">
                    <a id="AboutMe" class="navbutton" href="#about">About Me</a> 
                    <a id="Projects" class="navbutton" href="#projects">Portfolio</a> 
                    <a id="ContactMe" class="navbutton" href="#contact">Contact Me</a> 
                </nav>
                <p id="sparkle">✧.*</p>
            </div>
        </div>

        <div id="about"><AboutMe /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><ContactMe /></div>
    </>
  );
}

export default App;