export const UPDATE_TIME_ZONE = "UPDATE_TIME_ZONE";
export const SYNCHRONIZE_TIME_ZONE_DATE = "SYNCHRONIZE_TIME_ZONE_DATE";
export const CHANGE_THEME = "CHANGE_THEME";
export const GET_TIMESTAMP = "GET_TIMESTAMP";
import { ThemeNames } from "~src/type";

interface GetTimestampAction {
  type: typeof GET_TIMESTAMP;
  timestamp: number;
}
interface SynchronizeTimeAction {
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

export type TimeActionTypes = SynchronizeTimeAction | UpdateTimeZoneAction | ChangeThemeAction | GetTimestampAction;

export interface Istate {
  date: Date;
  timezone: number;
  theme: ThemeNames;
}
