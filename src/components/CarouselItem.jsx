import React from "react";
import styled from "styled-components";
import Img from "../assets/screenshot.png";
const Item = styled.img`
  src: ${(props) => props.src};
  // max-width: 200px;
  max-height: 350px;
`;

const Text = styled.div`
  margin-top: 15px;
  width: fit-content;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  justify-items: center;
  padding: 20px;
`;
export const CarouselItem = ({ text, src }) => {
  return (
    <Container>
      <Item src={Img} />
      <Text>{text}</Text>
    </Container>
  );
};
