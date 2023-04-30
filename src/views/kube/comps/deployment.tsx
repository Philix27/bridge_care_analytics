import React from "react";
import styled from "styled-components";

export default function DeploymentComp() {
  return <Container id="deployments">Deployment Section</Container>;
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
