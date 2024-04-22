import React from "react";
import UniFoundersCard from "../subcomponents/UniFoundersCard";
import TechArsenalCard from "@/subcomponents/TechArsenalCard";
import SoftSkillsCard from "@/subcomponents/SoftSkillsCard";
import ArticlesCard from "@/subcomponents/ArticlesCard";
import PrinciplesCard from "@/subcomponents/PrinciplesCard";
import UniversityExperienceCard from "@/subcomponents/UniversityExperienceCard";
import EaglesLogo from "../../public/EaglesLogo.png";
import SixersLogo from "../../public/76ersLogo.png";
import PhilliesLogo from "../../public/PhilliesLogo.png";
import NasaLogo from "../../public/NasaLogo.png";
import UVALogo from "../../public/UVALogo.png";
import RHCPLogo from "../../public/RHCPLogo.png";
import StrokesLogo from "../../public/StrokesLogo.png";
import TaiwanFlag from "../../public/TaiwanFlag.png";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="projects__center-grid">
            <Image className="projects__bouncing-logo" src={EaglesLogo} alt="Eagles"/>
            <Image className="projects__bouncing-logo" src={SixersLogo} alt="76ers" style={{animationDelay: '-33s'}}/>
            <Image className="projects__bouncing-logo" src={PhilliesLogo} alt="Phillies" style={{animationDelay: '-52s'}}/>
            <Image className="projects__bouncing-logo" src={NasaLogo} alt="Nasa" style={{animationDelay: '-65s'}}/>
            <Image className="projects__bouncing-logo" src={UVALogo} alt="UVA" style={{animationDelay: '-3s'}}/>
            <Image className="projects__bouncing-logo" src={RHCPLogo} alt="RHCP" style={{animationDelay: '-20s'}}/>
            <Image className="projects__bouncing-logo" src={StrokesLogo} alt="Strokes" style={{animationDelay: '-40s'}}/>
            <Image className="projects__bouncing-logo" src={TaiwanFlag} alt="Strokes" style={{animationDelay: '-49s'}}/>

            <div className="projects__container">
                <UniFoundersCard/>
                <TechArsenalCard/>
                <SoftSkillsCard/>
                <PrinciplesCard/>
                <UniversityExperienceCard/>
                <ArticlesCard/>
            </div>
        </div>
    )

};

export default Projects;