import { UPDATE_TIME_ZONE, SYNCHRONIZE_TIME_ZONE_DATE, CHANGE_THEME, SET_DATE, TimeActionTypes } from "../types/types";
import { ThemeNames } from "~src/type";

export const setDate = (timestamp: number): TimeActionTypes => {
  return {
    type: SET_DATE,
    timestamp,
  };
};

export const updateTimeZone = (value: number): TimeActionTypes => {
  return {
    type: UPDATE_TIME_ZONE,
    value,
  };
};

export const synchronizeTimeZone = (): TimeActionTypes => {
  return {
    type: SYNCHRONIZE_TIME_ZONE_DATE,
  };
};

export const changeTheme = (theme: ThemeNames): TimeActionTypes => {
  return {
    type: CHANGE_THEME,
    theme,
  };
};
