import React from 'react';
import Image from "next/image";
import homeImage from '../../public/IndiaMountainFullBody.jpg';

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
                <h1 className='home-first-name'>Will</h1>
                <h1 className='home-last-name'>Butler</h1>

        </div>
    )
};

export default Home;