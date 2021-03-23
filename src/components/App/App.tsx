import React from "react";

import { DateTime } from "~src/components/DateTime/DateTime";
import { SynchronizeTimeZone } from "~src/components/SynchronizeTimeZone/SynchronizeTimeZone";
import { TimeZone } from "~src/components/TimeZone/TimeZone";
import { Container } from "~src/ui/";
import { H1 } from "~src/ui/";
import { H2 } from "~src/ui/";
import { TimesWrapper } from "~src/ui/";
import { TimesZonesWrapper } from "~src/ui/";
import { SynchronizeButtonSizes } from "~src/ui/";

const App: React.FC = () => {
  return (
    <Container>
      <H1>Current Date</H1>
      <TimesWrapper>
        <TimesZonesWrapper>
          <H2>Time Zone</H2>
          <TimeZone />
        </TimesZonesWrapper>
        <TimesZonesWrapper>
          <H2>Date Time</H2>
          <DateTime />
        </TimesZonesWrapper>
      </TimesWrapper>
      <SynchronizeTimeZone size={SynchronizeButtonSizes.medium} />
    </Container>
  );
};

export default App;
