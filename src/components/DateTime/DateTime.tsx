import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import { Istate } from "~src/Store/types/types";
import { DateTimeString } from "~src/ui/";

export const DateTime: React.FC = () => {
  const date = useSelector((state: Istate) => state.date);

  return <DateTimeString>{format(date, "dd-MM-yyyy hh:mm:ss aa")}</DateTimeString>;
};
