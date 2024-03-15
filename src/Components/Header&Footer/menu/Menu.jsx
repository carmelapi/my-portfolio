import "../../../styles/menu.css";
export default function ShowMenu() {
  return (
    <div className="menu__container">
      <ul className="menu__list">
        <li>
          <a
            target="_blank"
            href="https://www.figma.com/proto/MBwomhhdgiyFQQfhiRBIxgIg/Pippa?page-id=1400%3A1296&node-id=1400-1488&mode=design&t=JNwaWuEPC1F3hN4P-1"
            aria-label="look my project"
          >
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
