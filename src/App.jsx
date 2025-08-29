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
      
      <div id="modalSpirit" class="modal">
  <div class="modal-content">

    <h2>Inner Spirit - Game Pitch</h2>
    <p>Want to watch Inner Spirit and the Game Pitch? Take a look at it here!</p>
    <br></br><a href="https://drive.google.com/file/d/1h3HQZsNgmavLsETc3SxUItuwAU1r0j1j/view?usp=sharing"><img class="modalImage" src="link-spirit.png"></img></a>
    <div class="modal-footer">
      <button id="closeModalSpirit">Close</button>
    </div>
  </div>
</div>

<div id="modalBuhay" class="modal">
  <div class="modal-content">

    <h2>Pangkabuhayan - Short Film</h2>
    <p>The full Short Film Animatic is featured on my Youtube Channel. Come check it out! It is a Topical Story.</p>
    <br></br><a href="https://www.youtube.com/watch?v=gG0eSUFYpIg&t=45s"><img class="modalImage" src="link-buhay.png"></img></a>
    <div class="modal-footer">
      <button id="closeModalBuhay">Close</button>
    </div>
  </div>
</div>

<div id="modalLamentos" class="modal">
  <div class="modal-content">

    <h2>La Lorna - Horror Game Animations</h2>
    <p>Here is the full folder of animations and concept art I made for La Lorna!</p>
    <br></br><a href="https://drive.google.com/drive/folders/1_0oNxLVWSRGgIyT-8JVw8fwcvpF8ewn3?usp=sharing"><img class="modalImage" src="link-lamentos.jpg"></img></a>
    <div class="modal-footer">
      <button id="closeModalLamentos">Close</button>
    </div>
  </div>
</div>
    </>
  );
}

export default App;