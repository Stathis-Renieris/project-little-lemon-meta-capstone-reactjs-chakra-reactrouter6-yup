import { Fragment } from "react";

import classes from "./BookingPage.module.css";

export default function BookingPage() {
  return (
    <Fragment>
      <section className={classes.bookingFormSection}>
        <div className={`fluidContainer ${classes.bookingFormContainer}`}>
          <div className={classes.heroText}>
            <div className={classes.displayTitle}>Little Lemon</div>
            <div className={classes.displaySubtitle}>Chicago</div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
