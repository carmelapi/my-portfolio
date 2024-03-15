import "../../styles/footer.css";
import { LiaLinkedin, LiaGithubSquare } from "react-icons/lia";
import { SiCodewars } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <section className="section-footer">
        <div className="footer__icons">
          <a href="https://www.linkedin.com/in/carmela-pippa/" target="_blank">
            <LiaLinkedin size={"3rem"} />
          </a>
          <a href="https://www.codewars.com/users/Carmelapippa" target="_blank">
            <SiCodewars size={"2rem"} />
          </a>
          <a href="https://github.com/carmelapi" target="_blank">
            <LiaGithubSquare size={"3rem"} />
          </a>
        </div>
        <h4>
          <a href="mailto:carmelapippa@gmail.com">carmelapippa@gmail.com</a>
        </h4>
      </section>
    </>
  );
}
