import React from "react";
import Head from "next/head";
import Image from "next/image";
import { montserrat, openSans } from "../styles/fonts";
import UnifoundersImage from "../../public/UnifoundersLogo.png";
import VidInterviewerLogo from "../../public/VidInterviewerLogo.png";
import TIWWLogo from "../../public/TIWWLogo.png";
import REGNLogo from "../../public/REGNLogo.png";
import MachledgeLogo from "../../public/MachledgeLogo.svg";
import PaletteLogo from "../../public/PaletteLogo.png";
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
  {
    title: "REGN",
    description:
      "An NGO that bridges the gap between short-term and long-term disaster relief efforts.",
    image: REGNLogo,
    link: "https://regnrelief.com/",
    technologies: ["v0", "Next.js", "Adobe InDesign", "ClickUp"],
  },
  {
    title: "Machine Legibility",
    description:
      "A studio that converts domain knowledge into machine-readable data and builds the agents that can act on it.",
    image: MachledgeLogo,
    link: "https://getmachinelegibility.com/",
    technologies: ["Claude Code", "Adobe InDesign", "ClickUp"],
  },
  {
    title: "Palette",
    description:
      "A Digital Audio Workstation-integrated AI co-producer that bridges the gap between creative taste and technical execution.",
    image: PaletteLogo,
    link: "https://trypaletteapp.com/",
    technologies: ["Claude Code", "Codex", "Adobe InDesign", "ClickUp"],
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://will-butler.com/ProjectsPage" />
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="projectspage projectspage__gradient">
        <div className="spotty-background">
          <div className="spot spot-1"></div>
          <div className="spot spot-2"></div>
          <div className="spot spot-3"></div>
          <div className="spot spot-4"></div>
          <div className="spot spot-5"></div>
        </div>
        <NavButton />

        <h1 className={`projectspage__title ${montserrat.className}`}>
          My Work
        </h1>
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
    </>
  );
};

export default ProjectsPage;
