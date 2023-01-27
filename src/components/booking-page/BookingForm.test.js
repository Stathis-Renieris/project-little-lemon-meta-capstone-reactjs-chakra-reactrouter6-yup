import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import moment from "moment/moment";

import BookingForm from "./BookingForm";
import { fetchAPI } from "../../api/api";

describe("BookingForm", () => {
  test("Renders the booking form", () => {
    expect.assertions(5);

    const availableTimes = fetchAPI(new Date());
    const occasions = ["Birthday", "Anniversary"];
    const isLoading = false;
    const submitAPI = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        occasions={occasions}
        isLoading={isLoading}
        submitAPI={submitAPI}
      />
    );

    expect(screen.getByText("Choose date")).toBeInTheDocument();
    expect(screen.getByText("Choose time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("Does not call submitAPI(values) and displays error messages when Submit button is pressed without filling forms fields", async () => {
    expect.assertions(5);

    const availableTimes = fetchAPI(new Date());
    const occasions = ["Birthday", "Anniversary"];
    const updateTimes = jest.fn();
    const isLoading = false;
    const submitAPI = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        occasions={occasions}
        updateTimes={updateTimes}
        isLoading={isLoading}
        submitAPI={submitAPI}
      />
    );

    await fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(screen.getByText("You have to pick a date")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("You have to pick a time")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.getByText("You have to provide at least 1 guest")
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.getByText("You have to pick an occasion")
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(submitAPI).not.toHaveBeenCalled();
    });
  });

  test("Calls submitAPI(values) successfully when all form fields are filled properly", async () => {
    expect.assertions(2);

    const availableTimes = fetchAPI(new Date());
    const occasions = ["Birthday", "Anniversary"];
    const updateTimes = jest.fn();
    const isLoading = false;
    const submitAPI = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        occasions={occasions}
        updateTimes={updateTimes}
        isLoading={isLoading}
        submitAPI={submitAPI}
      />
    );

    const dateString = moment().format("YYYY-MM-DD");

    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: dateString },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Anniversary" },
    });

    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledWith({
        date: dateString,
        time: "17:00",
        guests: 2,
        occasion: "Anniversary",
      });
    });
  });
});
