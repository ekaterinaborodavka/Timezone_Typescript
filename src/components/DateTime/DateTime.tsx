import React from "react";
import { useSelector } from "react-redux";

import { Istate } from "~src/Store/types/types";
import { DateTimeString } from "~src/ui/";

export const DateTime: React.FC = () => {
  const date = useSelector((state: Istate) => state.date);

  return <DateTimeString date={date} />;
};
