import SectionMarquee from "./Marquee";
import SectionOne from "./SectionOne";
import Career from "./Career";
import Project from "../Project/Project";

export default function Body() {
  return (
    <>
      <SectionOne></SectionOne>
      <SectionMarquee></SectionMarquee>
      <Project></Project>
      <Career></Career>
    </>
  );
}
