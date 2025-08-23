import React, {useState} from 'react';
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function App() {
  return (
    <div>
      <h1>
        Welcome to{" "}
        <span>react-portfolio</span> 🚀
      </h1>
      <p>
        Your project is ready. Start building amazing things!
      </p>
    </div>
  );
}