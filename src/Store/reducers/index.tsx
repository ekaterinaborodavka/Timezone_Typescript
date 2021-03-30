import {
  UPDATE_TIME_ZONE,
  SYNCHRONIZE_TIME_ZONE_DATE,
  CHANGE_THEME,
  SET_DATE,
  TimeActionTypes,
  Istate,
} from "../types/types";
import { ThemeNames } from "~src/type";

const initialState: Istate = {
  date: new Date(),
  timezone: 0,
  theme: ThemeNames.dark,
};

const reducer = (state = initialState, action: TimeActionTypes): Istate => {
  switch (action.type) {
    case SET_DATE: {
      return {
        ...state,
        date: new Date(action.timestamp),
      };
    }
    case UPDATE_TIME_ZONE: {
      return {
        ...state,
        timezone: action.value,
      };
    }
    case SYNCHRONIZE_TIME_ZONE_DATE: {
      const newTimestamp = Date.parse(state.date.toString()) + state.timezone * 3600 * 1000;
      return {
        ...state,
        date: new Date(newTimestamp),
      };
    }
    case CHANGE_THEME: {
      return {
        ...state,
        theme: action.theme,
      };
    }
    default:
      return state;
  }
};

export default reducer;
