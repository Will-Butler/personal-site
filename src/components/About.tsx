import React, { useEffect } from 'react';
import Image from "next/image";
import { Link } from 'react-router-dom';
import headshot from '../../public/tundyheadshot3.png';
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { aboutSections } from '@/text/AboutSections';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 

const About = () => {

///////Scroll Animations///////
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ease: "none", duration: 2});
    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: "#about",
                    start: "top top",
                    end: "+=1000px",
                    // scrub: true,
                    // markers: true,
                    pin: true,
            })
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 39%",
                    end: "+=1000px",
                    scrub: true,
                    // markers: true,
                }
            });
            tl
            .from("#section1", {xPercent: -120})
            .from("#section2", {xPercent: -120})
            .from("#section3", {xPercent: -120})
        });
        return () => ctx.revert();
    }, [])

    return(
        <div id="about" className='about'>
            <div className='about__header-container'>
                <div className='about__headshot'></div>
                <Image
                className="about__headshot"
                alt="Headshot"
                src={headshot}
                placeholder="blur"
                quality={100}
                />
                <div className={`about__title ${montserrat.className}`}>About</div>
            </div>
            <div className='about__content-container'>
                <div id="section1" className={`about__content-section ${playfairDisplay.className}`}>{aboutSections["SECTION1"]}</div>
                <div id="section2" className={`about__content-section ${playfairDisplay.className}`}>{aboutSections["SECTION2"]}</div>
                <div id="section3" className={`about__content-section ${playfairDisplay.className}`}>{aboutSections["SECTION3"]}</div>
            </div>
        </div>
    )
};


export default About;