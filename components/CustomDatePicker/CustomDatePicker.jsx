import React from "react";
import Datepicker from "react-tailwindcss-datepicker";

export function CustomDatePicker({ value, handleValueChange }) {
  return (
    <Datepicker
      value={value}
      onChange={handleValueChange}
      startFrom={new Date("2016-07-02T23:58:48.000+00:00")}
      minDate={new Date("2016-07-02T23:58:48.000+00:00")}
      separator="to"
      containerClassName="w-1/4"
    />
  );
}
