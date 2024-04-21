import React from "react";
import { PiGraduationCapLight } from "react-icons/pi";
import Link from "next/link";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import UVAExperience from "@/pages/UVAExperience";
import UVAExperienceCard from "../subcomponents/UVAExperienceCard";
import tundy from "../../public/tundyheadshot3.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillLeftSquare, AiFillRightSquare, AiOutlineRollback } from "react-icons/ai";
import UVAExperienceContent from "@/text/UVAExperienceContent";
import HoonsSolo from "../../public/HoonsSolo.jpeg";
import VisasSolo from "../../public/VisasSolo.jpeg";
import MahjongSolo from "../../public/MahjongSolo.jpeg";
import P4PSolo from "../../public/P4PSolo.jpeg";
import Beer5KSolo from "../../public/Beer5kGroupSitting.jpeg";
import Beer5KSolo1 from "../../public/Beer5kMicStanding.jpeg";
import RugbySolo from "../../public/RugbyStandingWide.jpeg";
import RugbySolo1 from "../../public/RugybWide.png";
import RanchSolo from "../../public/RanchChickens.png";
import RanchSolo1 from "../../public/RanchPigs.png";

var settings = {
    className: 'uvaexperience__carousel',
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    adaptiveHeight: true,
    slide: 'UVAExperienceCard',
    // arrows: false,
    responsive: [
        {
            breakpoint: 1450,
            settings: {
              slidesToShow: 4,
            }
          },
        {
            breakpoint: 1220,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 1,
            }
          }
    ]
  };

const UniversityExperienceCard: React.FC = () => {
    const picSize = '160px';
    return (
        <div className="projects__card projects__uva-card uvaexperience__gradient">
                <div className="projects__card-header-container">
                    <PiGraduationCapLight/>
                    <div className={`projects__card-header-title ${montserrat.className}`}>University Experience</div>
                </div>
                <Link href="/UVAExperience">
                    <div className="uvaexperience__carousel-container" style={{margin: '10px 0 5px 0'}}>
                    <Slider {...settings}>
                        <UVAExperienceCard
                        blurb={UVAExperienceContent["HOONS_BLURB"]}
                        paragraph="this is paragraph"
                        pic={HoonsSolo}
                        picSize={picSize}
                        />
                        <UVAExperienceCard
                        blurb={UVAExperienceContent["RUGBY_BLURB"]}
                        paragraph="this is paragraph"
                        pic={RugbySolo}
                        picSize={picSize}
                        />
                        <UVAExperienceCard
                        blurb={UVAExperienceContent["RANCH_BLURB"]}
                        paragraph="this is paragraph"
                        pic={RanchSolo}
                        picSize={picSize}
                        />
                        <UVAExperienceCard
                        blurb={UVAExperienceContent["P4P_BLURB"]}
                        paragraph="this is paragraph"
                        pic={P4PSolo}
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
                    </div>
                </Link>
        </div>
    )
};

export default UniversityExperienceCard;