import { LiaGithubSquare } from "react-icons/lia";
import "../../styles/project.css";

export default function SingleProject({ id, name, tag, website, github, img }) {
  return (
    <div className="project__component">
      <div className="project__description">
        <div className="project__title">
          <a href={website}>
            <h2>{name}</h2>
          </a>
          <div className="project__tags">
            {tag.map((tagItem, id) => (
              <div key={id} className="project__tag">
                {tagItem}
              </div>
            ))}
          </div>
        </div>

        <a href={github} target="_blank" aria-label="Look my code on Github">
          <LiaGithubSquare size={"3rem"} />
        </a>
      </div>
      <div className="project__images">
        <img src={img} alt={name} />
      </div>
    </div>
  );
}
