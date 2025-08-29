import React, {useState} from 'react';
import "./App.css";
import aboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <div class="navi">
            <div class="content">
                <p>《 Micah Ella Abril's Portfolio 》</p>
                <nav class="leftside">
                    <button id="AboutMe" class="navbutton">About Me</button> 
                    <button id="Projects" class="navbutton">Portfolio</button> 
                    <button id="ContactMe" class="navbutton">Contact Me</button> 
                </nav>
                <p id="sparkle">✧.*</p>
            </div>
        </div>
      
      AboutMe ();
    </>
  );
}

export default App;