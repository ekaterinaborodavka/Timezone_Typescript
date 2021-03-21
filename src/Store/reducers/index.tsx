import {
  UPDATE_TIME_ZONE,
  SYNCHRONIZE_TIME_ZONE_DATE,
  TimeActionTypes,
  Istate,
} from '../types/types';

const initialState: Istate = {
  date: new Date(),
  timezone: 0,
};

const reducer = (state = initialState, action: TimeActionTypes): Istate => {
  switch (action.type) {
    case UPDATE_TIME_ZONE: {
      return {
        ...state,
        timezone: action.value,
      };
    }
    case SYNCHRONIZE_TIME_ZONE_DATE: {
      const timestamp = Date.now() + state.timezone * 3600 * 1000;

      return {
        ...state,
        date: new Date(timestamp),
      };
    }
    default:
      return state;
  }
};

export default reducer;
