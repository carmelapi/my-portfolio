import { useState } from "react";
import "../../styles/header.css";

export default function Header() {
  const [isClose, setIsClose] = useState(true);

  function toogleMenu() {
    setIsClose(!isClose);
    console.log("clicked");
  }

  return (
    <header>
      <menu onClick={toogleMenu}>
        {isClose ? (
          <div className="menu-hamburger">
            <p>Menu</p>
            <div className="line-menu"></div>
          </div>
        ) : (
          <div className="menu-hamburger">
            <p>Close</p>
            <div className="line-menu__close"></div>
          </div>
        )}
      </menu>
    </header>
  );
}
