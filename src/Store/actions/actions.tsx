import {
  UPDATE_TIME_ZONE,
  SYNCHRONIZE_TIME_ZONE_DATE,
  TimeActionTypes,
} from '../types/types';

export const updateTimeZone = (value: number): TimeActionTypes => {
  return {
    type: UPDATE_TIME_ZONE,
    value,
  };
};

export const getTime = (): TimeActionTypes => {
  return {
    type: SYNCHRONIZE_TIME_ZONE_DATE,
  };
};
