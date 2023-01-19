import { Link } from "react-router-dom";

import classes from "./Button.module.css";

export default function Button({ children, link, onClick }) {
  if (link) {
    return (
      <Link
        to={link}
        className={classes.btn}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
