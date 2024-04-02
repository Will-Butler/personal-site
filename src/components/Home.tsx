import React from 'react';
import Image from "next/image";
import homeImage from '../../public/IndiaMountainFullBody.jpg';
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';

const Home = () => {
    return(
        <div className="home">
            <Image
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
                    <div className={`home-current-status ${playfairDisplay.className} text-sm text-white`}>...looking for a software developer position.</div>
                </div>

        </div>
    )
};

export default Home;