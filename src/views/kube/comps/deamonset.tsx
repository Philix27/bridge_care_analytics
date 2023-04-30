import React from "react";
import styled from "styled-components";

export default function DeamonSetComp() {
  return <Container id="workload">Deamon Set Section</Container>;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
  min-height: 500px;
  padding: 10px;
  background-color: #45515e;
  margin-bottom: 20px;
`;
