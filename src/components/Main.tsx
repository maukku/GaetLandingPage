import React from "react";
import styled from "styled-components";
import ProfileScreenshot from "../assets/screenshot1.png";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;
const MainImage = styled.img`
  width: 500px;
`;

function Main() {
  return (
    <MainContainer>
      <MainImage src={ProfileScreenshot} alt="" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure quia
        esse doloribus alias excepturi veniam! Repellat quia dolorum saepe
        asperiores est quas impedit maiores architecto. Mollitia eius molestiae
        dolorem!
      </div>
    </MainContainer>
  );
}

export default Main;
