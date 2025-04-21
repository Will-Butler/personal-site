import React, { useRef } from "react";
import Link from "next/link";
import UVAExperienceCard from "../subcomponents/UVAExperienceCard";
import tundy from "../../public/tundyheadshot3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import WBOutline from "../../public/WBOutline.png";
import UVAExperienceContent from "@/text/UVAExperienceContent";
import hoons from "../../public/hoons.jpeg";
import VisasSolo from "../../public/VisasSolo.jpeg";
import MahjongSolo from "../../public/MahjongSolo.jpeg";
import p4p from "../../public/p4p.jpeg";
import Beer5KSolo from "../../public/Beer5kGroupSitting.jpeg";
import rugby from "../../public/rugby.jpeg";
import paahaa from "../../public/paahaa.png";
import Image from "next/image";
import NavButton from "@/subcomponents/NavButton";

interface UVAExperienceProps {
  picSize: string;
}
const UVAExperience: React.FC<UVAExperienceProps> = ({ picSize }) => {
  let sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };

  var settings = {
    className: "uvaexperience__carousel",
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    adaptiveHeight: true,
    slide: "UVAExperienceCard",
    arrows: false,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 715,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="uvaexperience uvaexperience__gradient">
      <NavButton />
      <div className="uvaexperience__carousel-container">
        <Slider ref={sliderRef} {...settings}>
          <UVAExperienceCard
            blurb={UVAExperienceContent["HOONS_BLURB"]}
            paragraph="this is paragraph"
            pic={hoons}
            picSize={picSize}
          />
          <UVAExperienceCard
            blurb={UVAExperienceContent["RUGBY_BLURB"]}
            paragraph="this is paragraph"
            pic={rugby}
            picSize={picSize}
          />
          <UVAExperienceCard
            blurb={UVAExperienceContent["RANCH_BLURB"]}
            paragraph="this is paragraph"
            pic={paahaa}
            picSize={picSize}
          />
          <UVAExperienceCard
            blurb={UVAExperienceContent["P4P_BLURB"]}
            paragraph="this is paragraph"
            pic={p4p}
            picSize={picSize}
          />
          <UVAExperienceCard
            blurb={UVAExperienceContent["BEER5K_BLURB"]}
            paragraph="this is paragraph"
            pic={Beer5KSolo}
            picSize={picSize}
          />
          <UVAExperienceCard
            blurb={UVAExperienceContent["VISAS_BLURB"]}
            paragraph="this is paragraph"
            pic={VisasSolo}
            picSize={picSize}
          />
          <UVAExperienceCard
            blurb={UVAExperienceContent["MAHJONG_BLURB"]}
            paragraph="this is paragraph"
            pic={MahjongSolo}
            picSize={picSize}
          />
        </Slider>
        <div className="uvaexperience__carousel-arrow-wrapper">
          <button className="button" onClick={previous}>
            <AiFillLeftSquare className="uvaexperience__carousel-arrow" />
          </button>
          <button className="button" onClick={next}>
            <AiFillRightSquare className="uvaexperience__carousel-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UVAExperience;
