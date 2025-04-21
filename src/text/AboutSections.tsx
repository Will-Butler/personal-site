import React from "react";

export const aboutSections = {
  SECTION1: (
    <>
      Hi! I am a UVA Computer Science/Chinese graduate and current UNC MBA
      student. After a{" "}
      <a
        className="experience__uva-xp-link"
        href="https://medium.com/digital-global-traveler/taking-a-gap-year-in-taiwan-was-the-best-decision-ive-ever-made-15b655dd4e75"
        target="_blank"
      >
        productive gap year
      </a>{" "}
      in Taiwan, I traveled around the US for a year while working on my{" "}
      <a
        className="experience__uva-xp-link"
        href="https://uni-founders.com/"
        target="_blank"
      >
        startup
      </a>
      .
    </>
  ),
  SECTION2: (
    <>
      {`I've designed and developed `}
      <a
        href="/ProjectsPage"
        className="experience__uva-xp-link"
        target="_blank"
      >
        4 websites
      </a>
      , read hundreds of books, published{" "}
      <a
        className="experience__uva-xp-link"
        href="https://medium.com/@willbutler"
        target="_blank"
      >
        30+ articles
      </a>
      , ran countless miles, completed one{" "}
      <a
        className="experience__uva-xp-link"
        href="https://medium.com/express-impact/why-everyone-should-try-living-with-the-monks-d8c3d3ce40ea"
        target="_blank"
      >
        10-day silence retreat
      </a>
      , written/produced 6 songs, visited 25 countries, eaten every food
      possible, helped 100+ travelers learn to surf (in two languages!), and
      have been asked how tall I am 384 times.
    </>
  ),
  SECTION3: (
    <>
      I am currently working on a focused on connecting university student
      founders with alumni. If you have any questions or just want to chat, do
      not hesitate to{" "}
      <a
        className="experience__uva-xp-link"
        href="#connect"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        connect
      </a>
      ! To learn more about me, keep scrolling.
    </>
  ),
};
