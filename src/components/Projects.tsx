import React from "react";
import UniFoundersCard from "../subcomponents/UniFoundersCard";
import TechArsenalCard from "@/subcomponents/TechArsenalCard";
import SoftSkillsCard from "@/subcomponents/SoftSkillsCard";
import ArticlesCard from "@/subcomponents/ArticlesCard";
import PrinciplesCard from "@/subcomponents/PrinciplesCard";
import UniversityExperienceCard from "@/subcomponents/UniversityExperienceCard";
const Projects = () => {
    return (
        <div className="projects__center-grid">
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