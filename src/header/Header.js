import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/old-compass-logo.svg";
import { Link} from 'react-router-dom'
import "./Header.css";


const Header = () => {



  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">

      <div className="logo-nav">

        <div className="logo-container">
          <Link activeClass="active" className="test1" to="/" spy={true} smooth={true} duration={500} >
            <Logo className="logo" />

          </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <Link activeClass="active" className="test1" to="about" spy={true} smooth={true} duration={500}>
            <li className="option" onClick={closeMobileMenu}>
              ABOUT
            </li>
          </Link>
          <Link to="contact">
            <li className="option" onClick={closeMobileMenu}>
              CONTACT
            </li>
          </Link>
          <Link to="services">
            <li className="option" onClick={closeMobileMenu}>
              SERVICES
            </li>
          </Link>

        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
