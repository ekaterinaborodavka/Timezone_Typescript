import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, date, optionsKnob } from "@storybook/addon-knobs";
import { DateTimeString } from "./DateTimeString";
import { DateTimeProps, DateFormatVariant } from "~src/type";

export default {
  title: "DateTimeString",
  component: DateTimeString,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<DateTimeProps> = () => {
  return (
    <DateTimeString
      formatDate={optionsKnob("Format", DateFormatVariant, DateFormatVariant.fullDate, { display: "select" })}
      date={date("Date", new Date())}
    />
  );
};
