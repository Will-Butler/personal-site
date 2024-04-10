import React, { useRef } from "react";
import UVAExperienceCard from "../../subcomponents/UVAExperienceCard";
import tundy from "../../public/tundyheadshot3.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";


const UVAExperience: React.FC = () => {
    let sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

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
        arrows: false,
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

      return(
        <div className="uvaexperience">
            <div className="uvaexperience__carousel-container">
                <Slider ref={slider => {sliderRef = slider;}} {...settings}>
                    <UVAExperienceCard
                    index={1}
                    blurb="This is blurb"
                    paragraph="this is paragraph"
                    pic={tundy}
                    />
                    <UVAExperienceCard
                    index={2}
                    blurb="This is blurb"
                    paragraph="this is paragraph"
                    pic={tundy}
                    />
                    <UVAExperienceCard
                    index={3}
                    blurb="This is blurb"
                    paragraph="this is paragraph"
                    pic={tundy}
                    />
                </Slider>
                <div style={{ textAlign: "center" }}>
                    <button className="button" onClick={previous}>
                    <AiFillLeftSquare style={{fontSize: '100px'}}/>
                    </button>
                    <button className="button" onClick={next}>
                    <AiFillRightSquare style={{fontSize: '100px'}}/>
                    </button>
                </div>
            </div>

        </div>
    )
};

export default UVAExperience;