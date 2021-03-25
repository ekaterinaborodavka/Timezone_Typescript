interface IThemeStyleItem {
  main: string;
  textColor: string;
}

interface IThemeStyle {
  [key: string]: IThemeStyleItem;
}

export const theme: IThemeStyle = {
  light: {
    main: "rgb(148, 230, 148)",
    textColor: "black",
  },
  dark: {
    main: "rgb(45, 90, 45)",
    textColor: "white",
  },
};
