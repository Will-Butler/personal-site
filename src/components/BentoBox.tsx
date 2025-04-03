import React from "react";
import ProjectsCard from "../subcomponents/ProjectsCard";
import TechArsenalCard from "@/subcomponents/TechArsenalCard";
import SoftSkillsCard from "@/subcomponents/SoftSkillsCard";
import ArticlesCard from "@/subcomponents/ArticlesCard";
import PrinciplesCard from "@/subcomponents/PrinciplesCard";
import UniversityExperienceCard from "@/subcomponents/UniversityExperienceCard";

const BentoBox = () => {
  return (
    <div className="bentobox__center-grid">
      <div className="bentobox__container">
        <ProjectsCard />
        <TechArsenalCard />
        <SoftSkillsCard />
        <PrinciplesCard />
        <UniversityExperienceCard />
        <ArticlesCard />
      </div>
    </div>
  );
};

export default BentoBox;
