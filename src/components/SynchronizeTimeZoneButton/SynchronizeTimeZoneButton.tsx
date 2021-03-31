import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import * as actions from "~src/Store/actions/actions";
import { SynchronizeButton } from "~src/ui/";

export const SynchronizeTimeZoneButton: React.FC = () => {
  const dispatch = useDispatch();

  const onSynchronizeTimeZone = useCallback(() => {
    dispatch(actions.synchronizeTimeZone());
  }, [dispatch]);

  return <SynchronizeButton onClick={onSynchronizeTimeZone}>SYNCHRONIZE TIME ZONE</SynchronizeButton>;
};
