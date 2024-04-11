import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';

const Contact = () => {
    return(
        <div className="contact">
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
    );
};

export default Contact;