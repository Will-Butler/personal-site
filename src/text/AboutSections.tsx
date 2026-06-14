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
      {`I've developed and grown `}
      <a
        href="/ProjectsPage"
        className="experience__uva-xp-link"
        target="_blank"
      >
        4 ventures
      </a>
      {`, read `}
      <a
        className="experience__uva-xp-link"
        href="https://www.goodreads.com/user/show/50620329-will"
        target="_blank"
      >
        hundreds of books
      </a>
      , published{" "}
      <a
        className="experience__uva-xp-link"
        href="https://medium.com/@willbutler"
        target="_blank"
      >
        60+ articles
      </a>
      , ran{" "}
      <a
        className="experience__uva-xp-link"
        href="https://www.strava.com/athletes/92647109"
        target="_blank"
      >
        countless miles
      </a>
      , completed one{" "}
      <a
        className="experience__uva-xp-link"
        href="https://medium.com/express-impact/why-everyone-should-try-living-with-the-monks-d8c3d3ce40ea"
        target="_blank"
      >
        10-day silence retreat
      </a>
      , written/produced 6 songs, visited 50+ countries, eaten every food
      possible, helped 100+ travelers learn to surf (in two languages!), and
      have been asked how tall I am 384 times.
    </>
  ),
  SECTION3: (
    <>
      If you have any questions or just want to chat, do not hesitate to{" "}
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
