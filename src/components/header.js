import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  const showOptions = () => {
    document.querySelector("header ul").classList.toggle("displayNav");
    setDisplay(!display);
  };
  const closeOption = async (id) => {
    const container = document.querySelector(id);
    if (container) {
      container.scrollIntoView();
    } else {
      await navigate("/");
      document.querySelector(id).scrollIntoView();
    }
    document.querySelector("header ul").classList.remove("displayNav");
    setDisplay(false);
  };

  return (
    <header>
      <nav>
        <Link to="/" onClick={() => closeOption("#home")}>
          <h1>YT</h1>
        </Link>

        <ul>
          <li onClick={() => closeOption("#home")}>Home</li>
          <li onClick={() => closeOption("#skills")}>Skills</li>
          <li onClick={() => closeOption("#projects")}>Projects</li>
          <li onClick={() => closeOption("#about")}>About</li>
          <li onClick={() => closeOption("#contact")}>Contact</li>
        </ul>
        <i
          onClick={showOptions}
          className={display ? "fa fa-close" : "fa fa-bars"}></i>
      </nav>
    </header>
  );
};

export default Header;
