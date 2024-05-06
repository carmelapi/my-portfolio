import { useState } from "react";
import "../../styles/header.css";
import ShowMenu from "./menu/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <menu onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div className="menu-hamburger">
              <p>Close</p>
              <div className="line-menu__close"></div>
            </div>
          ) : (
            <>
              <div className="menu-hamburger">
                <p>Menu</p>
                <div className="line-menu"></div>
              </div>
            </>
          )}
        </menu>
      </header>
      {isOpen && <ShowMenu setIsOpen={setIsOpen}></ShowMenu>}
    </>
  );
}
