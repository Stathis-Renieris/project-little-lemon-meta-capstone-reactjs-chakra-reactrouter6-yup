import { Link } from "react-router-dom";

import classes from "./Button.module.css";

export default function Button({
  children,
  link,
  onClick,
  fullWidth,
  disabled,
  isSubmit,
}) {
  if (link) {
    return (
      <Link
        to={link}
        className={classes.btn}
        disabled={disabled}
        style={fullWidth && { width: "100%" }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${classes.btn} ${disabled && classes.disabled}`}
      onClick={onClick}
      type={isSubmit && "submit"}
      disabled={disabled}
      style={fullWidth && { width: "100%" }}
      aria-label="On Click"
    >
      {children}
    </button>
  );
}
