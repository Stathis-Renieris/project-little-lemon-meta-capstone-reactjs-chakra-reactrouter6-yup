import { Link } from "react-router-dom";

import SuccessIcon from "../ui/icons/SuccessIcon";
import ConfirmationImage from "../../images/form-confirmation.jpg";

import classes from "./ConfirmedBooking.module.css";

export default function ConfirmedBooking({ makeNewReservation }) {
  return (
    <div className={classes.formConfirmation}>
      <div className={classes.confirmationMessage}>
        <SuccessIcon />
        <p>You have successfully reserved a table!</p>
      </div>
      <div className={classes.confirmationImage}>
        <img
          src={ConfirmationImage}
          alt=""
        />
      </div>
      <div className={classes.confirmationActions}>
        <p>Useful links:</p>
        <div className={classes.actions}>
          <Link
            to="/booking-page"
            onClick={() => makeNewReservation(true)}
          >
            Make a new table reservation
          </Link>
          <Link to="/">Go to Home page</Link>
        </div>
      </div>
    </div>
  );
}
