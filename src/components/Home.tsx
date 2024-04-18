import React, { useEffect } from 'react';
import Image from "next/image";
import homeImage from '../../public/IndiaMountainFullBody.jpg';
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Home = () => {

    ///////Scroll Animations///////
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ease: "none", duration: 2});
    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: "#background",
                    start: "top top",
                    end: "+=300px",
                    scrub: true,
                    // markers: true,
                    pin: true,
                    pinSpacing: false
            })
        });
        return () => ctx.revert();
    }, [])
    return(
        <div id="home" className="home">
            <Image
                id="background"
                className="bg-img"
                alt="Home Cover Image"
                src={homeImage}
                placeholder="blur"
                quality={100}
                priority
                fill
                // objectPosition='left top'
                />
                <h1 className={`home-first-name ${openSans.className}`}>Will</h1>
                <h1 className={`home-last-name ${openSans.className}`}>Butler</h1>
                <div className='home-attribute-container'>
                    <div className={`home-attribute-title ${montserrat.className}`}>Programmer.</div>
                    <div className={`home-attribute-title ${montserrat.className}`}>Designer.</div>
                    <div className={`home-attribute-title ${montserrat.className}`}>Musician.</div>
                    {/* <div className={`home-current-status ${playfairDisplay.className} text-sm text-white`}>...looking for a software developer position.</div> */}
                </div>

        </div>
    )
};

export default Home;