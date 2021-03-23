import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text, color } from "@storybook/addon-knobs";
import { SynchronizeButton, SynchronizeButtonProps, SynchronizeButtonSizes } from "./SynchronizeButton";

export default {
  title: "SynchronizeTimeZone",
  component: SynchronizeButton,
  decorators: [withKnobs],
} as Meta;

const Template: Story<SynchronizeButtonProps> = (args) => (
  <SynchronizeButton
    style={{ color: color("Color", "rgb(45, 90, 45)"), borderColor: color("Color", "rgb(45, 90, 45)") }}
    {...args}
  >
    {args.label}
  </SynchronizeButton>
);

export const Default = Template.bind({});
Default.args = {
  size: SynchronizeButtonSizes.medium,
  label: text("Text", "SYNCHRONIZE TIME ZONE"),
};
