import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import homeImage from "../../public/IndiaMountainFullBody.jpg";
import croppedImage from "../../public/HomePageCroppedBody.png";
import { openSans, montserrat, playfairDisplay } from "../styles/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const homeRef = useRef(null);

  ///////Scroll Animations///////
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none", duration: 2 });

  // Letter animation sequence
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hide elements initially
      gsap.set(".home-last-name, .home-attribute-container", {
        autoAlpha: 0,
      });

      // Hide background images initially
      gsap.set(".bg-img, .bg-img-crop", {
        autoAlpha: 0,
      });

      // Make sure white background is visible initially
      gsap.set(".initial-white-bg", {
        autoAlpha: 1,
      });

      // Set initial states for letters
      gsap.set("#letter-w", { scale: 0.2, autoAlpha: 1 });
      gsap.set("#letter-i", {
        x: "-80vw",
        y: "-50vh",
        rotation: -45,
        autoAlpha: 1,
      });
      gsap.set("#letter-l1", { y: "-80vh", autoAlpha: 1 });
      gsap.set("#letter-l2", { x: "50vw", autoAlpha: 1, rotate: -30 });

      // Create animation timeline
      const tl = gsap.timeline({
        onComplete: () => setAnimationComplete(true),
      });

      // Letter animations
      tl.to("#letter-w", {
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      tl.to(
        "#letter-i",
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.7"
      );

      tl.to(
        "#letter-l1",
        {
          y: 0,
          duration: 0.5,
          ease: "bounce.out",
        },
        "-=.8"
      );

      // First l wobble
      tl.to(
        "#letter-l1",
        {
          rotation: -30,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=.6"
      );
      tl.to(
        "#letter-l1",
        {
          rotation: 14,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=.2"
      );

      // tl.to(
      //   "#letter-l1",
      //   {
      //     rotation: 18,
      //     duration: 0.4,
      //     ease: "power1.inOut",
      //   },
      //   "-=.6"
      // );

      // Second l slides in
      tl.to(
        "#letter-l2",
        {
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // First l stabilizes
      tl.to(
        "#letter-l1",
        {
          rotation: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        },
        "-=0.3"
      );

      // After letter animations complete, reveal everything else together
      tl.to(
        [
          ".home-last-name",
          ".home-attribute-container",
          ".bg-img",
          ".bg-img-crop",
        ],
        {
          autoAlpha: 1,
          duration: 1,
          stagger: 0.1,
        },
        "+=0.4"
      );

      tl.to(
        "#letter-l2",
        {
          rotation: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.3)",
        },
        "-=1.8"
      );

      // Move white background behind everything and fade it out
      tl.to(
        ".initial-white-bg",
        {
          zIndex: -2,
          autoAlpha: 0,
          duration: 0.5,
        },
        "-=1.8" // Slightly overlap with the reveal animation
      );
    }, homeRef);

    return () => ctx.revert();
  }, []);

  // Scroll trigger setup
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#background",
        start: "top top",
        end: "+=400px",
        scrub: true,
        pin: true,
        pinSpacing: false,
      });

      ScrollTrigger.create({
        trigger: "#background2",
        start: "top top",
        end: "+=400px",
        scrub: true,
        pin: true,
        pinSpacing: false,
        onEnter: () => {
          // Ensure the About section is above the pinned images
          gsap.set("#about", { zIndex: 10 });
        },
        onLeaveBack: () => {
          // Reset z-index when scrolling back up
          gsap.set("#about", { zIndex: "auto" });
        },
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" className="home" ref={homeRef}>
      <div className="initial-white-bg"></div>

      <Image
        id="background"
        className="bg-img"
        alt="Home Cover Image"
        src={homeImage}
        placeholder="blur"
        quality={100}
        priority
        fill
      />

      <Image
        id="background2"
        className="bg-img-crop"
        alt="Home Cover Image2"
        src={croppedImage}
        placeholder="blur"
        quality={100}
        priority
        fill
      />

      <h1 className={`home-first-name ${openSans.className}`}>
        <span id="letter-w">W</span>
        <span id="letter-i">i</span>
        <span id="letter-l1">l</span>
        <span id="letter-l2">l</span>
      </h1>

      <h1 className={`home-last-name ${openSans.className}`}>Butler</h1>

      <div className="home-attribute-container">
        <div className={`home-attribute-title ${montserrat.className}`}>
          Programmer.
        </div>
        <div className={`home-attribute-title ${montserrat.className}`}>
          Designer.
        </div>
        <div className={`home-attribute-title ${montserrat.className}`}>
          Writer.
        </div>
      </div>
    </div>
  );
};

export default Home;
