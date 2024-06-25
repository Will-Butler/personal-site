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
  const [section, setSection] = useState<any>(0);
  const home = '#home'
  const about = '#about'
  const experience = '#experience'
  const projects = '#projects'
  const contact = '#contact'
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
    document.querySelector(sections[nextSection])!.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'});
  }
  const handlePrevSectionNav = () => {
    let prevSection = section == 0 ? 4 : section - 1;
    setSection(prevSection);
    console.log(sections)
    document.querySelector(sections[prevSection])!.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'});
  }

  let observerOptions = {
    rootMargin: "0px",
    threshold: .5
  };

  const observerCallback =((entries: any, observer: any) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && entry.intersectionRatio >=.5){
        setSection(sectionIndexes[entry.target.id as keyof Object])
      }
    });
  })

  let observer = new IntersectionObserver(observerCallback, observerOptions);

  useEffect(() => {
    if(home != null){
      observer.observe(document.querySelector(home)!);
      observer.observe(document.querySelector(about)!);
      observer.observe(document.querySelector(experience)!);
      observer.observe(document.querySelector(projects)!);
      observer.observe(document.querySelector(contact)!);
    }
  }, [home, about, experience, projects, contact])  

  return (
    <Router>
      <div className="page-wrapper">
        {/* <div className="floating-nav-container">
          <button onClick={()=>{handlePrevSectionNav()}}>
            <AiFillUpSquare className="floating-nav-button"/>
          </button>
          <button onClick={()=>{handleNextSectionNav()}}>
            <AiFillDownSquare className="floating-nav-button"/>
          </button>
        </div> */}
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
