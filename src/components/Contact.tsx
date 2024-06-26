import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import Image from "next/image";
import EaglesLogo from "../../public/EaglesLogo.png";
import SixersLogo from "../../public/76ersLogo.png";
import PhilliesLogo from "../../public/PhilliesLogo.png";
import NasaLogo from "../../public/NasaLogo.png";
import UVALogo from "../../public/UVALogo.png";
import RHCPLogo from "../../public/RHCPLogo.png";
import StrokesLogo from "../../public/StrokesLogo.png";
import TaiwanFlag from "../../public/TaiwanFlag.png";

const Contact = () => {
    return(
        <div className="contact">
            <div className='contact-top'>
                <div className={`contact__title ${montserrat.className}`}>CONTACT</div>
                <div className='contact__media-icons-container'>
                    <a href="https://github.com/Will-Butler" target="_blank">
                        <AiFillGithub
                        className='contact__icon'
                        />
                    </a>
                    <a href="https://www.instagram.com/gunthbutler/" target="_blank">
                        <AiFillInstagram
                        className='contact__icon'
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/will-butler-782242197/" target="_blank">
                        <AiFillLinkedin
                        className='contact__icon'
                        />
                    </a>
                    <a href="mailto:will.butler24@gmail.com?Subject=Personal Website Inquiry">
                        <AiFillMail
                        className='contact__icon'
                        />
                    </a>
                </div>
            </div>
            <div className='contact-bottom'>
                <Image className="projects__bouncing-logo" src={EaglesLogo} alt="Eagles"/>
                <Image className="projects__bouncing-logo" src={SixersLogo} alt="76ers" style={{animationDelay: '-33s'}}/>
                <Image className="projects__bouncing-logo" src={PhilliesLogo} alt="Phillies" style={{animationDelay: '-52s'}}/>
                <Image className="projects__bouncing-logo" src={NasaLogo} alt="Nasa" style={{animationDelay: '-65s'}}/>
                <Image className="projects__bouncing-logo" src={UVALogo} alt="UVA" style={{animationDelay: '-3s'}}/>
                <Image className="projects__bouncing-logo" src={RHCPLogo} alt="RHCP" style={{animationDelay: '-20s'}}/>
                <Image className="projects__bouncing-logo" src={StrokesLogo} alt="Strokes" style={{animationDelay: '-40s'}}/>
                <Image className="projects__bouncing-logo" src={TaiwanFlag} alt="Strokes" style={{animationDelay: '-49s'}}/>
            </div>
        </div>
    );
};

export default Contact;