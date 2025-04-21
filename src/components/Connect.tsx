import React from "react";
import { openSans, montserrat, playfairDisplay } from "../styles/fonts";
import Image from "next/image";
import eagles from "../../public/eagles.png";
import sixers from "../../public/sixers.png";
import phillies from "../../public/phillies.png";
import nasa from "../../public/nasa.png";
import uva from "../../public/uva.png";
import rhcp from "../../public/rhcp.png";
import strokes from "../../public/strokes.png";
import taiwan from "../../public/taiwan.png";
import unc from "../../public/UNCLogo.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaMedium } from "react-icons/fa";

const Connect = () => {
  return (
    <div id="connect" className="connect">
      <div className="connect-top">
        <div className="spotty-background">
          <div className="spot spot-1"></div>
          <div className="spot spot-2"></div>
          <div className="spot spot-3"></div>
          <div className="spot spot-4"></div>
          <div className="spot spot-5"></div>
        </div>
        <div className={`connect__title ${montserrat.className}`}>CONNECT</div>
        <div className="connect__media-icons-container">
          <a href="https://github.com/Will-Butler" target="_blank">
            <AiFillGithub className="connect__icon" />
          </a>
          <a href="https://www.instagram.com/gunthbutler/" target="_blank">
            <AiFillInstagram className="connect__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/will-butler-782242197/"
            target="_blank"
          >
            <AiFillLinkedin className="connect__icon" />
          </a>
          <a href="mailto:will.butler24@gmail.com?Subject=Personal Website Inquiry">
            <AiFillMail className="connect__icon" />
          </a>
          <a href="https://medium.com/@will-butler" target="_blank">
            <FaMedium className="connect__icon" />
          </a>
        </div>
      </div>

      <div className="connect-bottom">
        <Image className="bentobox__bouncing-logo" src={eagles} alt="Eagles" />
        <Image
          className="bentobox__bouncing-logo"
          src={sixers}
          alt="76ers"
          style={{ animationDelay: "-33s" }}
        />
        <Image
          className="bentobox__bouncing-logo"
          src={phillies}
          alt="Phillies"
          style={{ animationDelay: "-52s" }}
        />
        <Image
          className="bentobox__bouncing-logo"
          src={nasa}
          alt="Nasa"
          style={{ animationDelay: "-65s" }}
        />
        <Image
          className="bentobox__bouncing-logo"
          src={uva}
          alt="UVA"
          style={{ animationDelay: "-3s" }}
        />
        <Image
          className="bentobox__bouncing-logo"
          src={rhcp}
          alt="RHCP"
          style={{ animationDelay: "-20s" }}
        />
        <Image
          className="bentobox__bouncing-logo"
          src={strokes}
          alt="Strokes"
          style={{ animationDelay: "-40s" }}
        />
        <Image
          className="bentobox__bouncing-logo"
          src={taiwan}
          alt="Taiwan"
          style={{ animationDelay: "-49s" }}
        />
        <Image
          className="bentobox__bouncing-logo"
          src={unc}
          alt="UNC"
          style={{ animationDelay: "-18s" }}
        />
      </div>
    </div>
  );
};

export default Connect;
