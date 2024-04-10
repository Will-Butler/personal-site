import React, { useState } from "react";
import { openSans, montserrat, playfairDisplay } from '../src/styles/fonts';
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import clsx from 'clsx';

interface UVAExperienceCardProps {
    blurb: string;
    paragraph: string;
    pic: string | StaticImport;
    index: number;
}

const UVAExperienceCard: React.FC<UVAExperienceCardProps> = ({blurb, paragraph, pic, index}) => {
    return (
        <div className="uvaexperience__card">
            <Image
            className="uvaexperience__card-pic"
            src={pic}
            alt="Image Not Found"
            quality={100}
            />
            <div className={`${montserrat.className} uvaexperience__card-blurb`}>{blurb}{index}</div>
            {/* <div>{paragraph}</div> */}
        </div>
    )
}

export default UVAExperienceCard;