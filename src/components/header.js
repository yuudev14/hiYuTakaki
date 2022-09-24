import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef();
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

  const headerStyleEffect = () => {
    const md5Name = document.getElementById("md5_name");
    if (md5Name) {
      const top = md5Name.getBoundingClientRect().top;
      if (top - headerRef.current.offsetHeight < 0) {
        headerRef.current.classList.add("bg-[#191e24]");
      } else {
        headerRef.current.classList.remove("bg-[#191e24]");
      }
    }
  };

  useEffect(() => {
    headerStyleEffect();
    window.onscroll = headerStyleEffect;
  }, []);

  return (
    <header ref={headerRef}>
      <nav>
        <Link to="/" onClick={() => closeOption("#home")}>
          <LazyLoadImage
            effect="blur"
            src={logo}
            alt="preview"
            loading="lazy"
            className="w-[50px]"
          />
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
