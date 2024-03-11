import "../../styles/footer.css";
import { LiaLinkedin, LiaGithubSquare } from "react-icons/lia";

export default function Footer() {
  return (
    <>
      <section className="section-footer">
        <div>
          <a href="https://www.linkedin.com/in/carmela-pippa/">
            <LiaLinkedin size={"3rem"} />
          </a>
          <a href="https://github.com/carmelapi">
            <LiaGithubSquare size={"3rem"} />
          </a>
        </div>
        <h4>carmelapippa@gmail.com</h4>
      </section>
    </>
  );
}
