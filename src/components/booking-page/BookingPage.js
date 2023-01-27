import { Fragment, useEffect, useState, useReducer } from "react";

import BookingForm from "./BookingForm";
import { fetchAPI } from "../../api/api";
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../../context/alert-context";

import classes from "./BookingPage.module.css";
import ConfirmedBooking from "./ConfirmedBooking";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "update-times":
      return fetchAPI(new Date(action.payload));
    case "reset-times":
      return fetchAPI(new Date());
    default:
      return state;
  }
};

export const initializeTimes = () => fetchAPI(new Date());

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [occasions, setOccasions] = useState(["Birthday", "Anniversary"]);
  const [isFormDisplayed, setIsFormDisplayed] = useState(true);
  const { isLoading, response, submitAPI } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    document.title = "Table reservation | Little Lemon";
  }, []);

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        dispatch({ type: "reset-times" });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setIsFormDisplayed(false);
      }
      onOpen(response.type, response.message);
    }
  }, [response]);

  const updateTimesHandler = (e) => {
    // console.log(e.target.value);
    dispatch({ type: "update-times", payload: e.target.value });
  };

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
            {isFormDisplayed ? (
              <BookingForm
                availableTimes={availableTimes}
                occasions={occasions}
                updateTimes={updateTimesHandler}
                isLoading={isLoading}
                submitAPI={submitAPI}
              />
            ) : (
              <ConfirmedBooking makeNewReservation={setIsFormDisplayed} />
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
