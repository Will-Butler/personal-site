import React from "react";
import Link from "next/link";

//TODO: link certain bullets to work that was completed (ie. UniFounders, Music, articles)
export const experienceBullets = {
  NCIDEA_BULLET1:
    "Support early-stage founders across the North Carolina entrepreneurial ecosystem.",
  NCIDEA_BULLET2:
    "Evaluate startup applications and business models, providing analysis to help guide funding and program decisions.",
  NCIDEA_BULLET3:
    "Conduct market and competitive research to assess venture viability and growth potential for emerging companies.",
  NCI_BULLET1:
    "Co-designed role supporting commercialization strategy for NCInnovation's portfolio of university research teams across North Carolina.",
  NCI_BULLET2:
    "Map the statewide vendor ecosystem for grant-funded research teams and support post-grant commercialization process design.",
  NCI_BULLET3: "Work directly with portfolio teams on transition planning.",
  REGN_BULLET1:
    "Lead data, economic strategy, and systems analysis for a pro-bono disaster recovery consultancy, directing a 6-person business team supporting nonprofit operations and partner project feasibility.",
  REGN_BULLET2:
    "Drive funding strategy for a $7.5M community redevelopment project (Asheville River Arts Creative Campus), evaluating CDBG-DR vs. private funding pathways and developing revenue models to subsidize artist space.",
  REGN_BULLET3:
    "Support $40M+ restoration effort of eight burnt-down historic structures for the Lahaina Restoration Foundation, consulting on cashflow management, fundraising, PR, and operations.",
  UNC_BULLET1:
    "Masters in Business Administration | Peter G.C. Mallinson Full-Tuition Fellowship Recipient | Class of 2027",
  UNC_BULLET2:
    "Concentrations: Entrepreneurship; Technology Innovation and Product Management",
  UNC_BULLET3:
    "President, Entrepreneurship and Venture Capital Club | VP of Operations, Sports and Entertainment Business Club",
  UNIFOUNDERS_BULLET1: (
    <>
      Individually design, develop, and maintain{" "}
      <a
        className="experience__uva-xp-link"
        href="https://unifounders.onrender.com"
        target="_blank"
      >
        a platform
      </a>{" "}
      to advise and connect 20+ student startup founders across 3 universities
      with alumni mentors.
    </>
  ),
  UNIFOUNDERS_BULLET2:
    "Provide tailored consulting to each active startup on the platform.",
  UNIFOUNDERS_BULLET3:
    "Partnered with and served as CRO of BUILT, a UVA-backed, AI-powered tech transfer platform matching research faculty with commercial partners.",
  GAP_YEAR_BULLET1:
    "Founded UniFounders, a startup focused on supporting university student founders. Worked as product manager and designer, software developer, and marketing lead.",
  GAP_YEAR_BULLET2:
    "Taught part-time as a surf instructor: coordinated lessons and help 100+ aspiring surfers learn basic technique, in both English and Chinese.",
  GAP_YEAR_BULLET3:
    "Followed through on various other long-term personal projects including this portfolio website, my mandarin studies, and music production.",
  AMAZON_BULLET1:
    "Designed, implemented, tested, and presented a full-stack solution to enhance transparency with 3rd party sellers on the site.",
  AMAZON_BULLET2:
    "Achieved proficiency with over 10 new technologies within a 3-month span.",
  AMAZON_BULLET3:
    "Collaborated with and learned from a highly skilled team of developers and product managers with varying areas of expertise.",
  NASA_BULLET1:
    "Blueprinted a manned sample return mission to Mars as lead intern of the mission integration team.",
  NASA_BULLET2:
    "Collaborated with six other teams totaling over 80 people to maxmize positive outcomes among conflicting requirements and shared resources.",
  NASA_BULLET3:
    "Presented research, analysis, and estimates to NASA faculty and program leads for consideration in upcoming missions.",
  UVA_BULLET1:
    "Major: Computer Science | Minor: Chinese | GPA: 3.8 | Bachelor of Arts with Distinction.",
  UVA_BULLET2: (
    <>
      Click{" "}
      <Link className="experience__uva-xp-link" href="/UVAExperience">
        here
      </Link>{" "}
      to learn more about my time at UVA!
    </>
  ),
};
