import React from "react";
import DesktopWorkspace from "../../public/DesktopWorkspace.png";
import Image from "next/image";
import { AiOutlineProject } from "react-icons/ai";
import { montserrat } from "../styles/fonts";
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
          src={DesktopWorkspace}
          title="View My Work"
          alt="Click Here to View My Work"
        />
        <div className="bentobox__card-overlay">
          <button className={`bentobox__view-button ${montserrat.className}`}>
            View
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsCard;
