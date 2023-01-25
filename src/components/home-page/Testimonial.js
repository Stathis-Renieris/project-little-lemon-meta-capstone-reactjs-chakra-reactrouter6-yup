import StarIcon from "../ui/icons/StarIcon";
import HalfStarIcon from "../ui/icons/HalfStarIcon";
import classes from "./Testimonial.module.css";
import React from "react";

function Stars({ numberOfStars }) {
  const integerPart = Math.trunc(numberOfStars);
  const decimalPart = Number(numberOfStars.toString().split(".")[1]);
  const elements = [];

  if (integerPart <= 0) {
    elements.push(0);
  } else {
    for (let index = 1; index <= integerPart; index++) {
      if (index > 5) {
        break;
      }
      elements.push(0);
    }
  }

  return (
    <div className={classes.starsContainer}>
      {elements.map((x, index) => (
        <StarIcon key={index} />
      ))}
      {integerPart < 5 && decimalPart > 0 && <HalfStarIcon />}
    </div>
  );
}

export default function Testimonial({ image, name, stars, quote }) {
  return (
    <article className={classes.testimonial}>
      <div className={classes.userImage}>
        <img
          src={image}
          alt="Profile"
        />
      </div>
      <div className={classes.stars}>
        <Stars numberOfStars={stars} />
        <span>{stars}</span>
      </div>
      <figure className={classes.quotation}>
        <blockquote>{quote}</blockquote>
        <figcaption>&mdash; {name}</figcaption>
      </figure>
    </article>
  );
}
