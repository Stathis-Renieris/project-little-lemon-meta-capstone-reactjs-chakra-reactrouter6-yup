import { render, screen, fireEvent } from "@testing-library/react";

import BookingPage, { initializeTimes, updateTimes } from "./BookingPage";

describe("BookingPage", () => {
  test(`Renders the heading: 'Find a table for any occasion'`, () => {
    expect.assertions(1);
    render(<BookingPage />);
    const headingElement = screen.getByText("Find a table for any occasion");
    expect(headingElement).toBeInTheDocument();
  });

  test(`initializeTimes() returns an array of strings like: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]`, () => {
    expect.assertions(3);

    const result = initializeTimes();

    // Check if initializeTimes() returns an array:
    expect(Array.isArray(result)).toBe(true);
    // Check if the array has not a length of 0:
    expect(result.length).toBeGreaterThan(0);
    // Check if the array consists only of strings:
    const isStringArray = (arr) =>
      arr.every((item) => typeof item === "string");
    expect(isStringArray(result)).toBe(true);
  });

  test(`updateTimes(state, action) returns an array of strings like: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",] when called with an argument action = {type: "update-times", payload: "2023-01-20"}`, () => {
    expect.assertions(3);

    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: "update-times", payload: "2023-01-20" };
    const result = updateTimes(state, action);

    // Check if initializeTimes() returns an array:
    expect(Array.isArray(result)).toBe(true);
    // Check if the array has not a length of 0:
    expect(result.length).toBeGreaterThan(0);
    // Check if the array consists only of strings:
    const isStringArray = (arr) =>
      arr.every((item) => typeof item === "string");
    expect(isStringArray(result)).toBe(true);
  });
});
