import React from "react";
import "./header.css";
import Link from "./Link";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Namaste I'm</h5>
        <h1>Ajit Kumar</h1>
        <h5 className="text-light">I'm a Student , Software Developer</h5>
        <Link />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
