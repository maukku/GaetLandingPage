import React from "react";
import styled from "styled-components";
import LandingBG from "../assets/LandigPageBG.jpg";
const HeaderContainer = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${LandingBG});
  background-size: cover;
  display: grid;

  justify-items: center;
  
`;

const IntroText = styled.div`
  font-size: 25px;
  width: 800px;
  font-weight: semi-bold;
height: fit-content;
  color: white;
  letter-spacing: 2px;
  line-height: 1.6;
  background: linear-gradient(to top,
    hsla(0, 0%, 35.29%, 0) 0%,
    hsla(0, 0%, 34.53%, 0.034375) 16.36%,
    hsla(0, 0%, 32.42%, 0.125) 33.34%,
    hsla(0, 0%, 29.18%, 0.253125) 50.1%,
    hsla(0, 0%, 24.96%, 0.4) 65.75%,
    hsla(0, 0%, 19.85%, 0.546875) 79.43%,
    hsla(0, 0%, 13.95%, 0.675) 90.28%,
    hsla(0, 0%, 7.32%, 0.365625) 97.43%,
    hsla(0, 0%, 0%, 0.3) 900%);


 
`;
const Logo = styled.div`
  color: #fab114;
  padding: 20px;
  font-size: 50px;
  height: fit-content;
  cursor: pointer;
`;


function Main() {
  return (
    <div>
      <HeaderContainer>
     
          <Logo>Gaet</Logo>
          <IntroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
            quia esse doloribus alias excepturi veniam! Repellat quia dolorum
            saepe asperiores est quas impedit maiores architecto. Mollitia eius
            molestiae dolorem!
          </IntroText>
        
      </HeaderContainer>
    </div>
  );
}

export default Main;
