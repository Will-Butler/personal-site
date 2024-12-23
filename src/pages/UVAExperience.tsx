import React, { useRef } from "react";
import Link from "next/link";
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

interface UVAExperienceProps {
  picSize: string;
}
const UVAExperience: React.FC<UVAExperienceProps> = ({picSize}) => {
    let sliderRef = useRef<Slider>(null);
    const next = () => {
        sliderRef?.current?.slickNext();
    };
    const previous = () => {
        sliderRef?.current?.slickPrev();
    };

    var settings = {
        className: 'uvaexperience__carousel',
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        adaptiveHeight: true,
        slide: 'UVAExperienceCard',
        arrows: false,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                  slidesToShow: 2,
                }
              },
            {
                breakpoint: 1220,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 980,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 715,
                settings: {
                  slidesToShow: 1,
                }
              }
        ]
      };

      return(
        <div className="uvaexperience uvaexperience__gradient">
            <div className="uvaexperience__return-container ">
              <Link className="uvaexperience__return-icon" href="/">
                <AiOutlineRollback className="uvaexperience__return-icon"/>
              </Link>
            </div>
            <div className="uvaexperience__carousel-container">
                <Slider ref={sliderRef} {...settings}>
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
                <div className="uvaexperience__carousel-arrow-wrapper">
                    <button className="button" onClick={previous}>
                    <AiFillLeftSquare className="uvaexperience__carousel-arrow"/>
                    </button>
                    <button className="button" onClick={next}>
                    <AiFillRightSquare className="uvaexperience__carousel-arrow"/>
                    </button>
                </div>
            </div>

        </div>
    )
};

export default UVAExperience;