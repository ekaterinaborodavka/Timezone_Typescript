import { get, getTimestampString } from "~src/Services/networkProvider";

export const getGurrentTimestamp = (): Promise<getTimestampString>=> {
    return get(process.env.REACT_APP_URL_GET_TIMESTAMP as string)
  };