import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import * as actions from "~src/Store/actions/actions";
import { SynchronizeButton, SynchronizeButtonProps, SynchronizeButtonSizes } from "~src/ui/";

export const SynchronizeTimeZone: React.FC<SynchronizeButtonProps> = () => {
  const dispatch = useDispatch();

  const onGetTime = useCallback(() => {
    dispatch(actions.getTime());
  }, [dispatch]);

  return (
    <SynchronizeButton onClick={onGetTime} size={SynchronizeButtonSizes.medium}>
      SYNCHRONIZE TIME ZONE
    </SynchronizeButton>
  );
};
