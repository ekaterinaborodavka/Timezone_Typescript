import React from "react";
import styled from "styled-components/macro";
import { format } from "date-fns";

const Container = styled.div`
  width: 40%;
  font-size: 1.3rem;
  font-weight: normal;
  margin: 1rem auto;
  padding: 0.3rem;
  border: 1px solid black;
`;

interface DateTimeProps {
  date: Date;
}

export const DateTimeString: React.FC<DateTimeProps> = (props) => {
  return <Container>{format(props.date, "dd-MM-yyyy hh:mm:ss aa")}</Container>;
};
