import "../styles/body.css";
import SectionMarquee from "./Marquee";
import SectionOne from "./SectionOne";
import Project from "./Project";

export default function Body() {
  return (
    <>
      <SectionOne></SectionOne>
      <SectionMarquee></SectionMarquee>
      <Project></Project>
    </>
  );
}
