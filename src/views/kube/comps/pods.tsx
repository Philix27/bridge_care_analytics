import React from "react";
import styled from "styled-components";

export default function PodsComp() {
  return <Container id="pods">Pods Section</Container>;
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
