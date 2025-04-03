import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from "../styles/fonts";
import { AiOutlineCheck } from "react-icons/ai";
import PrinciplesImage from "../../public/Principles.png";
import Image from "next/image";
import { TfiNewWindow } from "react-icons/tfi";

const PrinciplesCard: React.FC = () => {
  return (
    <div className="bentobox__card bentobox__principles-card">
      <div className="bentobox__card-header-container">
        <AiOutlineStar />
        <div className={`bentobox__card-header-title ${montserrat.className}`}>
          Principles
        </div>
      </div>
      <a
        href="https://will-butler.notion.site/My-Principles-to-Live-By-ea111cce84564a999f3d66b29add57bb?pvs=4"
        target="_blank"
        className="bentobox__newtab-embed"
      >
        <Image
          style={{ borderRadius: "0 0 10px 10px" }}
          src={PrinciplesImage}
          title="View Principles"
          alt="Click Here to View Principles"
        />
        <div className="principles__new-tab-icon">
          <TfiNewWindow />
        </div>
      </a>
    </div>
  );
};

export default PrinciplesCard;
