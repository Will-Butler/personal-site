import Image from "next/image";
import { Inter } from "next/font/google";
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

//<Link to="/">Home</Link>

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <ul className="slides">
          <li className="slide">
            <Home/>
          </li>
          <li className="slide">
            <About/>
          </li>
          <li className="slide">
            <Experience/>
          </li>
          <li className="slide">
            <Contact/>
          </li>
        </ul>
      </div>
      <div className="no-show">
        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/topics" element={<h1>Topics</h1>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}
