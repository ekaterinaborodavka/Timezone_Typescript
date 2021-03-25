import React from "react";
import { useSelector } from "react-redux";

import { DateTime } from "~src/components/DateTime/DateTime";
import { SynchronizeTimeZone } from "~src/components/SynchronizeTimeZone/SynchronizeTimeZone";
import { TimeZone } from "~src/components/TimeZoneSelect/TimeZoneSelect";
import { Container } from "~src/ui/";
import { H1 } from "~src/ui/";
import { H2 } from "~src/ui/";
import { TimesWrapper } from "~src/ui/";
import { TimeSectionWrapper } from "~src/ui/";
import { ThemeButtonsWrapper } from "~src/ui/ThemeButtonsWrapper/ThemeButtonsWrapper";
import { ChangeThemeButton } from "~src/components/ChangeThemeButton/ChangeThemeButton";
import { ThemeProvider } from "styled-components";
import { Istate } from "~src/Store/types/types";
import { theme } from "~src/theme/theme";
import { ThemeNames } from "~src/type";

const App: React.FC = () => {
  const themeVariant = useSelector<Istate, ThemeNames>((state: Istate) => state.theme);

  return (
    <ThemeProvider theme={theme[themeVariant]}>
      <Container>
        <ThemeButtonsWrapper>
          <ChangeThemeButton theme={ThemeNames.dark}>Dark</ChangeThemeButton>
          <ChangeThemeButton theme={ThemeNames.light}>Light</ChangeThemeButton>
        </ThemeButtonsWrapper>
        <H1>Current Date</H1>
        <TimesWrapper>
          <TimeSectionWrapper>
            <H2>Time Zone</H2>
            <TimeZone />
          </TimeSectionWrapper>
          <TimeSectionWrapper>
            <H2>Date Time</H2>
            <DateTime />
          </TimeSectionWrapper>
        </TimesWrapper>
        <SynchronizeTimeZone />
      </Container>
    </ThemeProvider>
  );
};

export default App;
