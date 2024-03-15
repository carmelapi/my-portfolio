import "../../styles/footer.css";
import { LiaLinkedin, LiaGithubSquare } from "react-icons/lia";
import { SiCodewars } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <section className="section-footer">
        <div className="footer__icons">
          <a
            href="https://www.linkedin.com/in/carmela-pippa/"
            target="_blank"
            aria-label="Contact me on Linkedin"
          >
            <LiaLinkedin size={"3rem"} />
          </a>
          <a
            href="https://www.codewars.com/users/Carmelapippa"
            target="_blank"
            aria-label="Find me on codewars"
          >
            <SiCodewars size={"2rem"} />
          </a>
          <a
            href="https://github.com/carmelapi"
            target="_blank"
            aria-label="Look my code on Github"
          >
            <LiaGithubSquare size={"3rem"} />
          </a>
        </div>
        <h4>
          <a
            href="mailto:carmelapippa@gmail.com"
            aria-label="Contact me via email"
          >
            carmelapippa@gmail.com
          </a>
        </h4>
      </section>
    </>
  );
}
