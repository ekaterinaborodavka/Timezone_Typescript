import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";

import { DateTime } from "~src/components/DateTime/DateTime";
import { SynchronizeTimeZoneButton } from "~src/components/SynchronizeTimeZoneButton/SynchronizeTimeZoneButton";
import { TimeZoneSelect } from "~src/components/TimeZoneSelect/TimeZoneSelect";
import { Container } from "~src/ui/";
import { H1 } from "~src/ui/";
import { H2 } from "~src/ui/";
import { MainWrapper } from "~src/ui";
import { MainSectionWrapper } from "~src/ui/";
import { ThemeButtons } from "~src/components/ThemeButtons/ThemeButtons";
import { Istate } from "~src/Store/types/types";
import { theme } from "~src/theme/theme";
import { ThemeNames } from "~src/type";
import { getGurrentTimestamp } from "~src/api/getCurrentTimestamp";
import * as actions from "~src/Store/actions/actions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const themeVariant = useSelector<Istate, ThemeNames>((state: Istate) => state.theme);

  useEffect(() => {
    getGurrentTimestamp().then((res) => dispatch(actions.setDate(parseInt(res.UnixTimeStamp))));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[themeVariant]}>
      <Container>
        <ThemeButtons />
        <H1>Current Date</H1>
        <MainWrapper>
          <MainSectionWrapper>
            <H2>Time Zone</H2>
            <TimeZoneSelect />
          </MainSectionWrapper>
          <MainSectionWrapper>
            <H2>Date Time</H2>
            <DateTime />
          </MainSectionWrapper>
        </MainWrapper>
        <SynchronizeTimeZoneButton />
      </Container>
    </ThemeProvider>
  );
};

export default App;
