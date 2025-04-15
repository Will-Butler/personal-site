import React from "react";
import { PiGraduationCapLight } from "react-icons/pi";
import Link from "next/link";
import { montserrat } from "../styles/fonts";
import UVAExperience from "@/pages/UVAExperience";
import UVAExperienceCard from "./UVAExperienceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UVAExperienceContent from "@/text/UVAExperienceContent";
import hoons from "../../public/hoons.jpeg";
import VisasSolo from "../../public/VisasSolo.jpeg";
import MahjongSolo from "../../public/MahjongSolo.jpeg";
import p4p from "../../public/p4p.jpeg";
import Beer5KSolo from "../../public/Beer5kGroupSitting.jpeg";
import rugby from "../../public/rugby.jpeg";
import paahaa from "../../public/paahaa.png";

const UniversityExperienceCard: React.FC = () => {
  const picSize = "120px";
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    centerMode: false,
    initialSlide: 0,
    adaptiveHeight: false,
    fade: false,
    cssEase: "ease",
    variableWidth: false,
  };

  return (
    <div className="bentobox__card bentobox__uva-card uvaexperience__gradient">
      <div
        className="bentobox__card-header-container"
        style={{ boxShadow: "0px 1px 5px black" }}
      >
        <PiGraduationCapLight />
        <div className={`bentobox__card-header-title ${montserrat.className}`}>
          University Experience
        </div>
      </div>
      <Link href="/UVAExperience" className="bentobox__newtab-embed">
        <div
          className="bentobox__uva-carousel-container"
          style={{
            margin: "5px 0",
            height: "calc(100% - 40px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Slider {...settings}>
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
        </div>
        <div className="bentobox__card-overlay">
          <button className={`bentobox__view-button ${montserrat.className}`}>
            View
          </button>
        </div>
      </Link>
    </div>
  );
};

export default UniversityExperienceCard;
