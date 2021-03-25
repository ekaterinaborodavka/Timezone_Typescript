import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { ThemeButton } from "~src/ui/";
import * as actions from "~src/Store/actions/actions";
import { ThemeNames, ChangeThemeButtonProps } from "~src/type";

export const ChangeThemeButton: React.FC<ChangeThemeButtonProps> = ({ theme, children }) => {
  const dispatch = useDispatch();

  const onChangeTheme = useCallback(() => {
    dispatch(actions.changeTheme(ThemeNames[theme]));
  }, [dispatch, theme]);
  return <ThemeButton onClick={onChangeTheme}>{children}</ThemeButton>;
};
