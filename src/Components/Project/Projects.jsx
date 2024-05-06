import "../../styles/project.css";
import projectData from "./projectdata";
import SingleProject from "./SingleProject";

export default function Projects({ id, name, tag, website, github, img }) {
  return (
    <>
      <section className="section-project" id="projects">
        <div className="section-title">
          <h4>Frontend / </h4>
          <a href="https://www.figma.com/proto/MBwomhhdgiyFQQfhiRBIxgIg/Pippa?page-id=1400%3A1296&node-id=1400-1488&mode=design&t=JNwaWuEPC1F3hN4P-1">
            Design
          </a>
        </div>
        <div className="projects__container">
          {projectData.map((project) => (
            <SingleProject
              key={project.id}
              name={project.name}
              tag={project.tag}
              github={project.github}
              website={project.website}
              img={project.img}
            />
          ))}
        </div>
      </section>
    </>
  );
}
