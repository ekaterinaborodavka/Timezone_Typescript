export enum ThemeNames {
  // eslint-disable-next-line no-unused-vars
  dark = "dark",
  // eslint-disable-next-line no-unused-vars
  light = "light",
}

export enum DateFormatVariant {
  // eslint-disable-next-line no-unused-vars
  shortDate = "dd-MM-yyyy",
  // eslint-disable-next-line no-unused-vars
  fullDate = "dd-MM-yyyy hh:mm:ss aa",
}

export interface DateTimeProps {
  date: Date | number;
  formatDate?: DateFormatVariant;
}

export enum SynchronizeButtonSizes {
  // eslint-disable-next-line no-unused-vars
  large = "large",
  // eslint-disable-next-line no-unused-vars
  medium = "medium",
  // eslint-disable-next-line no-unused-vars
  small = "small",
}

export enum SynchronizeButtonColors {
  // eslint-disable-next-line no-unused-vars
  green = "green",
  // eslint-disable-next-line no-unused-vars
  blue = "blue",
  // eslint-disable-next-line no-unused-vars
  orange = "orange",
  // eslint-disable-next-line no-unused-vars
  gray = "gray",
}

export interface SynchronizeButtonProps {
  size?: SynchronizeButtonSizes;
  color?: SynchronizeButtonColors;
}
