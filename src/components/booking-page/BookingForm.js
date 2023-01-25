import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../../context/alert-context";
import WarningIcon from "../ui/icons/WarningIcon";
import LoadingSpinner from "../ui/LoadingSpinner";
import Button from "../ui/Button";
import classes from "./BookingForm.module.css";

export default function BookingForm({
  availableTimes,
  occasions,
  updateTimes,
}) {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        formik.resetForm();
      }
      console.log(response);
      onOpen(response.type, response.message);
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      test: 0,
      occasion: "",
    },
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: Yup.object({
      date: Yup.string().required(),
      time: Yup.string().required(),
      guests: Yup.number().min(1).max(10).required(),
      test: Yup.string().required(),
      occasion: Yup.string().required(),
    }),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={classes.form}
    >
      <FormControl isInvalid={formik.touched.date && formik.errors.date}>
        <FormLabel
          htmlFor="date"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Choose date
        </FormLabel>
        <Input
          id="date"
          name="date"
          type="date"
          // {...formik.getFieldProps("date")}
          value={formik.values.date}
          onBlur={formik.handleBlur}
          onChange={(e) => {
            updateTimes(e);
            formik.handleChange(e);
          }}
        />
        <FormErrorMessage>
          {formik.errors.date && (
            <div className={classes.errorContent}>
              <WarningIcon />
              {formik.errors.date}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.touched.time && formik.errors.time}>
        <FormLabel
          htmlFor="time"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Choose time
        </FormLabel>
        <Select
          id="time"
          name="time"
          placeholder="Select an option"
          {...formik.getFieldProps("time")}
        >
          {availableTimes.map((item, index) => (
            <option
              key={index}
              value={item}
            >
              {item}
            </option>
          ))}
        </Select>
        <FormErrorMessage>
          {formik.errors.time && (
            <div className={classes.errorContent}>
              <WarningIcon />
              {formik.errors.time}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
        <FormLabel
          htmlFor="guests"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Number of guests
        </FormLabel>
        <input
          id="guests"
          name="guests"
          type="number"
          placeholder="A number between 1 and 10"
          min="1"
          max="10"
          step={1}
          className={`${classes.formNumberInput} ${
            formik.touched.guests && formik.errors.guests && classes.error
          }`}
          {...formik.getFieldProps("guests")}
        />
        <FormErrorMessage>
          {formik.errors.guests && (
            <div className={classes.errorContent}>
              <WarningIcon />
              {formik.errors.guests}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={formik.touched.occasion && formik.errors.occasion}
      >
        <FormLabel
          htmlFor="occasion"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Occasion
        </FormLabel>
        <Select
          id="occasion"
          name="occasion"
          placeholder="Select an occasion"
          {...formik.getFieldProps("occasion")}
        >
          {occasions.map((item, index) => (
            <option
              key={index}
              value={item}
            >
              {item}
            </option>
          ))}
        </Select>
        <FormErrorMessage>
          {formik.errors.occasion && (
            <div className={classes.errorContent}>
              <WarningIcon />
              {formik.errors.occasion}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <div style={{ marginTop: "1.5rem" }}>
        <Button
          fullWidth={true}
          disabled={isLoading}
          isSubmit={true}
        >
          {isLoading ? (
            <span style={{ display: "inline-flex", gap: "1rem" }}>
              Loading
              <LoadingSpinner />
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  );
}
