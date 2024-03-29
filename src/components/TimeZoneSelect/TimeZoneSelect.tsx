import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { categoryTimeZones } from "~src/mocks/CategoryTimeZone";
import * as actions from "~src/Store/actions/actions";
import { Select } from "~src/ui/";

export const TimeZoneSelect: React.FC = () => {
  const dispatch = useDispatch();

  const onChange = useCallback(
    ({ target }) => {
      dispatch(actions.updateTimeZone(target.value));
    },
    [dispatch]
  );

  return (
    <Select onChange={onChange}>
      <option value={0}> Select time zone </option>
      <>
        {categoryTimeZones.map(({ id, name, timeZone, value }) => (
          <option key={id} value={value}>
            {name} / {timeZone}
          </option>
        ))}
      </>
    </Select>
  );
};
