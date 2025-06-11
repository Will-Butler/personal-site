import React from "react";
import Link from "next/link";
import Image from "next/image";
import { montserrat, playfairDisplay, openSans } from "../styles/fonts";
import UnifoundersImage from "../../public/unifounders.png";
import VidInterviewerLogo from "../../public/VidInterviewerLogo.png";
import WBOutline from "../../public/WBOutline.png";
import TIWWLogo from "../../public/TIWWLogoNoText.png";
import NavButton from "@/subcomponents/NavButton";
// Import other project images as needed

interface ProjectCard {
  title: string;
  description: string;
  image: any; // StaticImageData
  link: string;
  technologies: string[];
}

const projects: ProjectCard[] = [
  {
    title: "UniFounders",
    description:
      "A platform that connects university entrepreneurs and alumni, fostering innovation throughout campuses.",
    image: UnifoundersImage,
    link: "https://uni-founders.com",
    technologies: ["React", "Rails", "Supabase", "SCSS", "Bootstrap", "Figma"],
  },
  {
    title: "VidInterviewer",
    description:
      "A SaaS that conducts its own interviews for employers, allowing them to review candidates on their own time.",
    image: VidInterviewerLogo,
    link: "https://vidinterviewer.com",
    technologies: ["React", "Firebase Cloud Functions", "Firestore", "Express"],
  },
  {
    title: "Take It Worldwide",
    description:
      "A tech-savvy trip-planning service that thoughtfully designs highly personalized travel experiences.",
    image: TIWWLogo,
    link: "https://takeitworldwide.com",
    technologies: ["React", "TailwindCSS", "Node.js"],
  },
  // Add more projects here
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="projectspage projectspage__gradient">
      <div className="spotty-background">
        <div className="spot spot-1"></div>
        <div className="spot spot-2"></div>
        <div className="spot spot-3"></div>
        <div className="spot spot-4"></div>
        <div className="spot spot-5"></div>
      </div>
      <NavButton />

      <h1 className={`projectspage__title ${montserrat.className}`}>My Work</h1>
      <div className="projectspage__subtitle-container">
        <p className={`projectspage__subtitle-mask ${openSans.className}`}>
          A collection of my recent projects and collaborations
        </p>
      </div>

      <div className="projectspage__grid">
        {projects.map((project, index) => (
          <div key={index} className="projectspage__card">
            <div className="projectspage__card-image-container">
              <Image
                src={project.image}
                alt={project.title}
                className="projectspage__card-image"
                quality={100}
                fill
              />
              <div className="projectspage__card-image-gradient"></div>
            </div>

            <div className="projectspage__card-overlay">
              {/* <div className="projectspage__card-image-gradient"></div> */}
              <div className="projectspage__card-basic-info">
                <h2
                  className={`projectspage__card-title ${montserrat.className}`}
                >
                  {project.title}
                </h2>
                <p
                  className={`projectspage__card-description ${openSans.className}`}
                >
                  {project.description}
                </p>
              </div>

              <div className="projectspage__card-expanded-content">
                <div className="projectspage__card-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="projectspage__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectspage__card-button"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
