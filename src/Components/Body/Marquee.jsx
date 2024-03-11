import "../styles/marquee.css";
import Marquee from "react-fast-marquee";

export default function SectionMarquee() {
  return (
    <>
      <div className="marquee">
        <h4 className="marquee__title">
          Language / development tools / design tools
        </h4>

        <Marquee direction="left" className="marquee-text">
          <span>HTML</span>
          <span className="marquee__span-opacity">CSS</span>
          <span>JAVASCRIPT</span>
          <span className="marquee__span-opacity">REACT</span>
          <span>SEO</span>
          <span className="marquee__span-opacity">GITHUB </span>
        </Marquee>

        <Marquee direction="right" className="marquee-text">
          <span>FIGMA</span>
          <span className="marquee__span-opacity">MATERIAL UI</span>
          <span>ADOBE</span>
          <span className="marquee__span-opacity">TYPOGRAPHY</span>
          <span>WORDPRESS </span>
        </Marquee>
      </div>
    </>
  );
}
