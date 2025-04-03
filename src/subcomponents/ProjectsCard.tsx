import React, { useState } from "react";
import unifoundersLogo from "../../public/unifounders.png";
import Image from "next/image";
import { AiOutlineProject } from "react-icons/ai";
import { TfiNewWindow } from "react-icons/tfi";
import { openSans, montserrat, playfairDisplay } from "../styles/fonts";
import Link from "next/link";

const ProjectsCard: React.FC = ({}) => {
  return (
    <div className="bentobox__card bentobox__projects-card">
      <div className="bentobox__card-header-container">
        <AiOutlineProject />
        <div className={`bentobox__card-header-title ${montserrat.className}`}>
          My Work
        </div>
      </div>
      <Link href="/ProjectsPage" className="bentobox__newtab-embed">
        <Image
          style={{ objectFit: "cover", height: "100%" }}
          src={unifoundersLogo}
          title="View UniFounders Site"
          alt="Click Here to View UniFounders Site"
        />
        <div className="principles__new-tab-icon">
          <TfiNewWindow />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsCard;
