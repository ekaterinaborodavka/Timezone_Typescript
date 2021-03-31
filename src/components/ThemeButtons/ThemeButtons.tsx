import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { ThemeButton } from "~src/ui/";
import { ThemeNames } from "~src/type";
import { ThemeButtonsWrapper } from "~src/ui/ThemeButtonsWrapper/ThemeButtonsWrapper";
import * as actions from "~src/Store/actions/actions";

export const ThemeButtons: React.FC = () => {
  const dispatch = useDispatch();

  const onChangeTheme = useCallback(
    (theme) => {
      dispatch(actions.changeTheme(theme));
    },
    [dispatch]
  );

  return (
    <ThemeButtonsWrapper>
      <ThemeButton onClick={() => onChangeTheme(ThemeNames.dark)}>Dark</ThemeButton>
      <ThemeButton onClick={() => onChangeTheme(ThemeNames.light)}>Light</ThemeButton>
    </ThemeButtonsWrapper>
  );
};
