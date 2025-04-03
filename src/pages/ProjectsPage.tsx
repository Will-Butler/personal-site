import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineRollback } from "react-icons/ai";
import { montserrat } from "../styles/fonts";
import UnifoundersImage from "../../public/unifounders.png";
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
      "A platform connecting university entrepreneurs and fostering innovation across campuses.",
    image: UnifoundersImage,
    link: "https://unifounders.onrender.com",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  // Add more projects here
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="projectspage projectspage__gradient">
      <div className="projectspage__return-container">
        <Link className="projectspage__return-icon" href="/">
          <AiOutlineRollback />
        </Link>
      </div>

      <h1 className={`projectspage__title ${montserrat.className}`}>
        Projects Portfolio
      </h1>

      <div className="projectspage__grid">
        {projects.map((project, index) => (
          <div key={index} className="projectspage__card">
            <div className="projectspage__card-image-container">
              <Image
                src={project.image}
                alt={project.title}
                className="projectspage__card-image"
                quality={100}
              />
            </div>

            <div className="projectspage__card-content">
              <h2
                className={`projectspage__card-title ${montserrat.className}`}
              >
                {project.title}
              </h2>
              <p className="projectspage__card-description">
                {project.description}
              </p>

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
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
