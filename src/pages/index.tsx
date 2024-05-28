import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { AiFillDownSquare, AiFillUpSquare } from "react-icons/ai";
// import { IntersectionObserver } from 

//<Link to="/">Home</Link>
const inter = Inter({ subsets: ["latin"] });

export default function App() {
  // const navigate = useNavigate();
  const [section, setSection] = useState(0);
  const home = document.querySelector('#home')
  const about = document.querySelector('#about')
  const experience = document.querySelector('#experience')
  const projects = document.querySelector('#projects')
  const contact = document.querySelector('#contact')
  const sections = [home, about, experience, projects, contact];

  const sectionIndexes: {
    home: number;
    about: number;
    experience: number;
    projects: number;
    contact: number;
  } = {
    'home': 0,
    'about': 1,
    'experience': 2,
    'projects': 3,
    'contact': 4
  }
  const handleNextSectionNav = async () => {
    let nextSection = section == 4 ? 0 : (section % 4) + 1;
    setSection(nextSection);
    sections[nextSection]!.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'});
  }
  const handlePrevSectionNav = () => {
    let prevSection = section == 0 ? 4 : section - 1;
    setSection(prevSection);
    sections[prevSection]!.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'});
  }

  let observerOptions = {
    rootMargin: "0px",
    threshold: .5
  };

  const observerCallback =((entries: any, observer) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && entry.intersectionRatio >=.5){
        setSection(sectionIndexes[entry.target.id])
      }
    });
  })

  let observer = new IntersectionObserver(observerCallback, observerOptions);

  useEffect(() => {
    if(home != null){
      observer.observe(home);
      observer.observe(about);
      observer.observe(experience);
      observer.observe(projects);
      observer.observe(contact);
    }
  }, [home, about, experience, projects, contact])  

  return (
    <Router>
      <div className="page-wrapper">
        <div className="floating-nav-container">
          <button onClick={()=>{handlePrevSectionNav()}}>
            <AiFillUpSquare className="floating-nav-button"/>
          </button>
          <button onClick={()=>{handleNextSectionNav()}}>
            <AiFillDownSquare className="floating-nav-button"/>
          </button>
        </div>
        <ul id="slides" className="slides">
          <li id="home" className="slide">
            <Home/>
          </li>
          <li id="about" className="slide">
            <About/>
          </li>
          <li id="experience" className="slide">
            <Experience/>
          </li>
          <li id="projects" className="slide">
            <Projects/>
          </li>
          <li id="contact" className="slide">
            <Contact/>
          </li>
        </ul>
      </div>
      <div className="no-show">
      </div>
    </Router>
  );
}
