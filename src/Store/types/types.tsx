export const UPDATE_TIME_ZONE = "UPDATE_TIME_ZONE";
export const SYNCHRONIZE_TIME_ZONE_DATE = "SYNCHRONIZE_TIME_ZONE_DATE";
export const CHANGE_THEME = "CHANGE_THEME";
import { ThemeNames } from "~src/type";
interface GetTimeAction {
  type: typeof SYNCHRONIZE_TIME_ZONE_DATE;
}

interface UpdateTimeZoneAction {
  type: typeof UPDATE_TIME_ZONE;
  value: number;
}

interface ChangeThemeAction {
  type: typeof CHANGE_THEME;
  theme: ThemeNames;
}

export type TimeActionTypes = GetTimeAction | UpdateTimeZoneAction | ChangeThemeAction;

export interface Istate {
  date: Date;
  timezone: number;
  theme: ThemeNames;
}
