import React from "react";
import Link from "next/link";
import Image from "next/image";
import { montserrat, playfairDisplay, openSans } from "../styles/fonts";
import UnifoundersImage from "../../public/unifounders.png";
import VidInterviewerLogo from "/vidinterviewerlogo.png";
import WBOutline from "../../public/WBOutline.png";
import TIWWLogo from "../../public/TIWWLogoNoText.png";
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
    link: "https://unifounders.onrender.com",
    technologies: ["React", "Rails", "Supabase", "SCSS", "Bootstrap", "Figma"],
  },
  {
    title: "VidInterviewer",
    description:
      "A SAAS that conducts its own interviews, allowing interviewers to review candidates on their own time.",
    image: VidInterviewerLogo,
    link: "https://vidinterviewer.com",
    technologies: ["React", "Node.js", "Firebase", "Express", "TailwindCSS"],
  },
  {
    title: "Take It Worldwide",
    description:
      "A tech-savvy trip-planning service that thoughtfully designs highly personalized travel experiences.",
    image: TIWWLogo,
    link: "https://takeitworldwide.com",
    technologies: ["React"],
  },
  // Add more projects here
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="projectspage projectspage__gradient">
      <Link className="home-button" href="/">
        <Image
          className="home-button-image"
          src={WBOutline}
          alt="WBOutline"
          width={85}
          height={85}
        />
      </Link>

      <h1 className={`projectspage__title ${montserrat.className}`}>My Work</h1>
      <p className={`projectspage__subtitle ${openSans.className}`}>
        A collection of my recent projects and collaborations
      </p>

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
                  View Project
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
