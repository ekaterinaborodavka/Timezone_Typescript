import React from "react";
import styled from "styled-components/macro";
import { format } from "date-fns";
import { DateTimeProps, DateFormatVariant } from "~src/type";

const Container = styled.div`
  width: 40%;
  font-size: 1.3rem;
  font-weight: normal;
  margin: 1rem auto;
  padding: 0.3rem;
  border: 1px solid black;
`;

export const DateTimeString: React.FC<DateTimeProps> = ({ date, formatDate = DateFormatVariant.fullDate }) => {
  return <Container>{format(date, formatDate)}</Container>;
};
