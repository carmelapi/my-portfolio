import SectionMarquee from "./Marquee";
import SectionOne from "./SectionOne";
import Career from "./Career";
import Projects from "../Project/Projects";

export default function Body() {
  return (
    <>
      <SectionOne />
      <SectionMarquee />
      <Projects id="projects" />
      <Career />
    </>
  );
}
