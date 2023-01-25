import { Fragment, useEffect, useState, useReducer } from "react";

import BookingForm from "./BookingForm";

import classes from "./BookingPage.module.css";

const timesReducer = (state, action) => {
  switch (action.type) {
    case "update-times":
      // TODO: change this action:
      return state;
    default:
      return state;
  }
};

const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    initializeTimes()
  );
  const [occasions, setOccasions] = useState(["Birthday", "Anniversary"]);

  const updateTimes = (e) => {
    console.log("updateTimes called");
    dispatch({ type: "update-times", payload: e.target.value });
  };

  useEffect(() => {
    document.title = "Table reservation | Little Lemon";
  }, []);

  return (
    <Fragment>
      <section className={classes.bookingFormSection}>
        <div className={`fluidContainer ${classes.BookingPageContainer}`}>
          <div className={classes.heroText}>
            <div className={classes.displayTitle}>Little Lemon</div>
            <div className={classes.displaySubtitle}>Chicago</div>
          </div>
          <div className={classes.formContainer}>
            <h2 className="sectionTitle">Find a table for any occasion</h2>
            <BookingForm
              availableTimes={availableTimes}
              occasions={occasions}
              updateTimes={updateTimes}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
