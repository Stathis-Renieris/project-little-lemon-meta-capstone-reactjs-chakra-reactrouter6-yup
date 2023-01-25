import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../../images/logo-original.png";
import ClosedMenuIcon from "../../images/hamburger-lemon-half.svg";
import OpenedMenuIcon from "../../images/hamburger-lemon-circle.svg";
import classes from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  return (
    <header className={classes.header}>
      <div className={`fluidContainer ${classes.headerContainer}`}>
        <div className={classes.logo}>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <nav
          className={`${classes.mainNavigation} ${
            isMenuOpen ? classes.mainNavigationOpen : ""
          }`}
        >
          <menu>
            <li onClick={toggleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/">About</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/">Menu</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/booking-page">Reservations</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/">Order Online</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/">Login</Link>
            </li>
          </menu>
        </nav>
        <button
          className={classes.hamburger}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <img
              src={OpenedMenuIcon}
              alt=""
              className={classes.hamburgerIcon}
            />
          ) : (
            <img
              src={ClosedMenuIcon}
              alt=""
              className={classes.hamburgerIcon}
            />
          )}
        </button>
      </div>
    </header>
  );
}
