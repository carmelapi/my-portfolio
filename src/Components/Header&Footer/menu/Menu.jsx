import "../../../styles/menu.css";

export default function ShowMenu({ setIsOpen }) {
  return (
    <div className="menu__container">
      <ul className="menu__list">
        <li>
          <a
            href="#projects"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {" "}
            Project
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/carmela-pippa/"
            target="_blank"
            aria-label="Contact me on Linkedin"
          >
            Career
          </a>
        </li>
        <li>
          <a
            href="mailto:carmelapippa@gmail.com"
            target="_blank"
            aria-label="Contact me via email"
          ></a>
          Contact
        </li>
      </ul>
    </div>
  );
}
