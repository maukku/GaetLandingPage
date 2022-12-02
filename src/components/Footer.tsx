import React from "react";
import styled from "styled-components";
import { SmallLogo } from "../components/Main";

const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: grid;
  background-color: black;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const Title = styled.h2`
  font-weight: 600;
  color: white;
  width: fit-content;

  // justify-self: center;
`;

const Email = styled.div`
font-size: 25px;
color:white;
padding: 15px;
width: fit-content;
`

function Footer() {
  return (
    <Container>
      <SmallLogo>Gaet</SmallLogo>
      <Title>Let's start</Title>
      <Email>contact@gaet.com</Email>
    </Container>
  );
}

export default Footer;
