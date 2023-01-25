import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import ArrowUpIcon from "./icons/ArrowUpIcon";
import classes from "./ToTopButton.module.css";

export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    isVisible && (
      <Link to={location.pathname}>
        <div className={classes.toTopButton}>
          <ArrowUpIcon />
        </div>
      </Link>
    )
  );
}
