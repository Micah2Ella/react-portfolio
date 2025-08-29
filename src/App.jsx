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
                    <a href={AboutMe ()}>About Me</a> 
                    <a href="#port">Portfolio</a> 
                    <a href="#contact">Contact Me</a> 
                </nav>
                <p id="sparkle">✧.*</p>
            </div>
        </div>

        <div name="body">

        </div>
    </>
  );
}

export default App;