import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { DateTimeString, DateTimeProps } from "./DateTimeString";

export default {
  title: "DateTimeString",
  component: DateTimeString,
  decorators: [withKnobs],
} as Meta;

const Template: Story<DateTimeProps> = (args) => <DateTimeString {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
};
