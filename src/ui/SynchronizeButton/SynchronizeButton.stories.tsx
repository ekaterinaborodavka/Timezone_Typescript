import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SynchronizeButton, SynchronizeButtonProps, SynchronizeButtonSizes } from "./SynchronizeButton";

export default {
  title: "SynchronizeTimeZone",
  component: SynchronizeButton,
  decorators: [withKnobs],
} as Meta;

const Template: Story<SynchronizeButtonProps> = (args) => <SynchronizeButton {...args}>{args.label}</SynchronizeButton>;

export const Default = Template.bind({});
Default.args = {
  size: SynchronizeButtonSizes.medium,
  label: text("Text", "SYNCHRONIZE TIME ZONE"),
};

// export const Default: React.FC = () => {
//   const props: SynchronizeButtonProps = {
//     size: SynchronizeButtonSizes.large,
//     label: text("Text", "SYNCHRONIZE TIME ZONE"),
//   };
//   return <SynchronizeButton {...props} />;
// };
