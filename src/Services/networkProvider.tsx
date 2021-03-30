export interface getTimestampString {
  UnixTimeStamp: string;
}

export const get = async (url: string): Promise<getTimestampString> => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
