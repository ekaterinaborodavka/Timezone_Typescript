import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text, optionsKnob } from "@storybook/addon-knobs";
import { SynchronizeButton } from "./SynchronizeButton";
import { SynchronizeButtonSizes, SynchronizeButtonColors, SynchronizeButtonProps } from "~src/type";

export default {
  title: "SynchronizeButton",
  component: SynchronizeButton,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<SynchronizeButtonProps> = () => (
  <SynchronizeButton
    color={optionsKnob("Color", SynchronizeButtonColors, SynchronizeButtonColors.green, { display: "select" })}
    size={optionsKnob("Size", SynchronizeButtonSizes, SynchronizeButtonSizes.medium, { display: "select" })}
  >
    {text("TextButton", "SYNCHRONIZE TIME ZONE")}
  </SynchronizeButton>
);
