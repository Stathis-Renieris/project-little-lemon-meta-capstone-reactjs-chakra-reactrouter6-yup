import { render, screen, fireEvent } from "@testing-library/react";

import BookingPage, { initializeTimes, updateTimes } from "./BookingPage";

describe("BookingPage", () => {
  test(`Renders the heading: 'Find a table for any occasion'`, () => {
    expect.assertions(1);
    render(<BookingPage />);
    const headingElement = screen.getByText("Find a table for any occasion");
    expect(headingElement).toBeInTheDocument();
  });

  test(`initializeTimes() returns the following array: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]`, () => {
    expect.assertions(1);
    const timesTable = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toStrictEqual(timesTable);
  });

  // TODO: This test needs to be updated when updateTimes reducer gets modified
  test(`updateTimes(state, action) returns the same state it receives as an argument`, () => {
    expect.assertions(1);
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(updateTimes(state, { type: "update-times" })).toStrictEqual(state);
  });
});
