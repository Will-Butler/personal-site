import React, { useState } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from "../styles/fonts";
import Image from "next/image";
import mediumImage from "../../public/medium.png";

const ArticlesCard: React.FC = () => {
  const [loadingSite, setLoadingSite] = useState(true);

  return (
    <div className="bentobox__card bentobox__articles-card">
      <div className="bentobox__card-header-container">
        <AiOutlineFileText />
        <div className={`bentobox__card-header-title ${montserrat.className}`}>
          Published Articles
        </div>
      </div>
      <a
        href="https://medium.com/@will-butler"
        target="_blank"
        className="bentobox__newtab-embed"
      >
        <Image
          style={{ borderRadius: "0 0 10px 10px", maxHeight: "275px" }}
          src={mediumImage}
          title="View Articles"
          alt="Click Here to View Articles"
        />
        <div className="bentobox__card-overlay">
          <button className={`bentobox__view-button ${montserrat.className}`}>
            View
          </button>
        </div>
      </a>
    </div>
  );
};

export default ArticlesCard;
