import Button from "../ui/Button";
import HeroImage from "../../images/cta-hero-image.jpg";
import classes from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={classes.ctaSection}>
      <div className={`fluidContainer ${classes.heroContainer}`}>
        <div className={classes.heroText}>
          <div className={classes.displayTitle}>Little Lemon</div>
          <div className={classes.displaySubtitle}>Chicago</div>
          <div className={classes.text}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </div>
          <div className={classes.action}>
            <Button link="/booking-page">Reserve a table</Button>
          </div>
        </div>
        <div className={classes.heroImage}>
          <div className={classes.imageContainer}>
            <img
              src={HeroImage}
              alt="Delicious bruschettas"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
