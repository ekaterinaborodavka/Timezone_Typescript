export const UPDATE_TIME_ZONE = 'UPDATE_TIME_ZONE';
export const SYNCHRONIZE_TIME_ZONE_DATE = 'GET_TIME';

interface GetTimeAction {
  type: typeof SYNCHRONIZE_TIME_ZONE_DATE;
}

interface UpdateTimeZoneAction {
  type: typeof UPDATE_TIME_ZONE;
  value: number;
}

export type TimeActionTypes = GetTimeAction | UpdateTimeZoneAction;

export interface Istate {
  date: Date;
  timezone: number;
}
