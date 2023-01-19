import { Link } from "react-router-dom";

import ShoppingCartIcon from "../ui/icons/ShoppingCartIcon";
import classes from "./SpecialCard.module.css";

export default function SpecialCard({ image, title, price, description }) {
  return (
    <article className={classes.card}>
      <div className={classes.cardImageContainer}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className={classes.cardText}>
        <div className={classes.intro}>
          <span>{title}</span>
          <span>${price}</span>
        </div>
        <p className={classes.description}>{description}</p>
        <div className={classes.action}>
          <Link to="/">
            Order a delivery{" "}
            <span>
              <ShoppingCartIcon />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
