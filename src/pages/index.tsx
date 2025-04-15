import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Connect from "@/components/Connect";
import BentoBox from "@/components/BentoBox";
import { AiFillDownSquare, AiFillUpSquare } from "react-icons/ai";
import WBOutline from "../../public/WBOutline.png";
import Link from "next/link";
// import { IntersectionObserver } from

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
  const handleNextSectionNav = async () => {
    let nextSection = section == 4 ? 0 : (section % 4) + 1;
    setSection(nextSection);
    document.querySelector(sections[nextSection])!.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  };
  const handlePrevSectionNav = () => {
    let prevSection = section == 0 ? 4 : section - 1;
    setSection(prevSection);
    console.log(sections);
    document.querySelector(sections[prevSection])!.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
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
        <Link href="#home" className="home-button">
          <Image
            src={WBOutline}
            alt="Home"
            className="home-button-image"
            width={35}
            height={35}
          />
        </Link>
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
