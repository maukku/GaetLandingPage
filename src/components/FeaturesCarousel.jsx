import React from "react";
import styled from "styled-components";
import Img1 from "../assets/screenshot.png";
import { CarouselItem } from "./CarouselItem";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
gap: 15px;
width: 80%;
margin: auto;
margin-top: 20px;



`;
function FeaturesCarousel() {
  return (
    <Container>
      <CarouselItem
        src={Img1}
        text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Magni quibusdam perspiciatis ipsam? Sunt quasi corporis fuga, est quaerat officiis possimus"
      />
      <CarouselItem
        src={Img1}
        text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Magni quibusdam perspiciatis ipsam? Sunt quasi corporis fuga, est quaerat officiis possimus"
      />
      <CarouselItem
        src={Img1}
        text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Magni quibusdam perspiciatis ipsam? Sunt quasi corporis fuga, est quaerat officiis possimus"
      />
    </Container>
  );
}

export default FeaturesCarousel;
