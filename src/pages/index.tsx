import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Connect from "@/components/Connect";
import BentoBox from "@/components/BentoBox";
import NavButton from "@/subcomponents/NavButton";
//<Link to="/">Home</Link>
const inter = Inter({ subsets: ["latin"] });

export default function App() {
  // const navigate = useNavigate();
  const [section, setSection] = useState<any>(0);
  const home = "#home";
  const about = "#about";
  const experience = "#experience";
  const bentobox = "#bentobox";
  const connect = "#connect";
  const sections = [home, about, experience, bentobox, connect];

  const sectionIndexes: {
    home: number;
    about: number;
    experience: number;
    bentobox: number;
    connect: number;
  } = {
    home: 0,
    about: 1,
    experience: 2,
    bentobox: 3,
    connect: 4,
  };

  let observerOptions = {
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observerCallback = (entries: any, observer: any) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        setSection(sectionIndexes[entry.target.id as keyof Object]);
      }
    });
  };

  let observer = new IntersectionObserver(observerCallback, observerOptions);

  useEffect(() => {
    if (home != null) {
      observer.observe(document.querySelector(home)!);
      observer.observe(document.querySelector(about)!);
      observer.observe(document.querySelector(experience)!);
      observer.observe(document.querySelector(bentobox)!);
      observer.observe(document.querySelector(connect)!);
    }
  }, [home, about, experience, bentobox, connect]);

  return (
    <Router>
      <div className="page-wrapper">
        <NavButton />
        <ul id="slides" className="slides">
          <li id="home" className="slide">
            <Home />
          </li>
          <li id="about" className="slide">
            <About />
          </li>
          <li id="experience" className="slide">
            <Experience />
          </li>
          <li id="bentobox" className="slide">
            <BentoBox />
          </li>
          <li id="connect" className="slide">
            <Connect />
          </li>
        </ul>
      </div>
      <div className="no-show"></div>
    </Router>
  );
}
