import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import WBOutline from "../../public/WBOutline.png";
import { openSans } from "@/styles/fonts";

const NavButton = () => {
  const router = useRouter();
  const [isMainPage, setIsMainPage] = useState(true);

  useEffect(() => {
    // Check if we're on the main page or a subpage
    setIsMainPage(router.pathname === "/" || router.pathname === "/#home");
  }, [router.pathname]);

  // Determine the correct link format based on current page
  const getLink = (anchor: string) => {
    return isMainPage ? anchor : `/${anchor}`;
  };

  return (
    <Link href={isMainPage ? "#home" : "/"} className="home-button">
      <Image
        src={WBOutline}
        alt="Home"
        className="home-button-image"
        width={35}
        height={35}
      />
      <div className="home-button-nav">
        <Link
          href={getLink("#home")}
          className={`home-button-nav-link ${openSans.className}`}
        >
          Home
        </Link>
        <Link
          href={getLink("#about")}
          className={`home-button-nav-link ${openSans.className}`}
        >
          About
        </Link>
        <Link
          href={getLink("#experience")}
          className={`home-button-nav-link ${openSans.className}`}
        >
          Experience
        </Link>
        <Link
          href={getLink("#bentobox")}
          className={`home-button-nav-link ${openSans.className}`}
        >
          Showcase
        </Link>
        <Link
          href={getLink("#connect")}
          className={`home-button-nav-link ${openSans.className}`}
        >
          Connect
        </Link>
      </div>
    </Link>
  );
};

export default NavButton;
