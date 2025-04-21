import React from "react";
import Link from "next/link";
import Image from "next/image";
import WBOutline from "../../public/WBOutline.png";
import { openSans } from "@/styles/fonts";

const NavButton = () => {
  return (
    <Link href="#home" className="home-button">
      <Image
        src={WBOutline}
        alt="Home"
        className="home-button-image"
        width={35}
        height={35}
      />
      <div className="home-button-nav">
        <Link
          href="#home"
          className={`home-button-nav-link ${openSans.className}`}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={`home-button-nav-link ${openSans.className}`}
        >
          About
        </Link>
        <Link
          href="#experience"
          className={`home-button-nav-link ${openSans.className}`}
        >
          Experience
        </Link>
        <Link
          href="#bentobox"
          className={`home-button-nav-link ${openSans.className}`}
        >
          Showcase
        </Link>
        <Link
          href="#connect"
          className={`home-button-nav-link ${openSans.className}`}
        >
          Connect
        </Link>
      </div>
    </Link>
  );
};

export default NavButton;
