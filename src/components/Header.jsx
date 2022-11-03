import React from "react";
import styled from 'styled-components';

import { Flex, Heading, Box, VStack, Spacer } from "@chakra-ui/layout";


const HeaderContainer = styled.div`
  background-color: #000000;
  width: 100%;
  height: 150px;

  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 70%,
    1% 69.97%,
    2% 69.88%,
    3% 69.73%,
    4% 69.52%,
    5% 69.26%,
    6% 68.93%,
    7% 68.55%,
    8% 68.11%,
    9% 67.62%,
    10% 67.08%,
    11% 66.48%,
    12% 65.84%,
    13% 65.15%,
    14% 64.41%,
    15% 63.63%,
    16% 62.81%,
    17% 61.95%,
    18% 61.05%,
    19% 60.13%,
    20% 59.17%,
    21% 58.18%,
    22% 57.17%,
    23% 56.14%,
    24% 55.09%,
    25% 54.02%,
    26% 52.94%,
    27% 51.86%,
    28% 50.76%,
    29% 49.67%,
    30% 48.58%,
    31% 47.49%,
    32% 46.41%,
    33% 45.33%,
    34% 44.28%,
    35% 43.24%,
    36% 42.22%,
    37% 41.22%,
    38% 40.25%,
    39% 39.31%,
    40% 38.4%,
    41% 37.53%,
    42% 36.69%,
    43% 35.89%,
    44% 35.14%,
    45% 34.43%,
    46% 33.77%,
    47% 33.15%,
    48% 32.59%,
    49% 32.08%,
    50% 31.62%,
    51% 31.21%,
    52% 30.87%,
    53% 30.58%,
    54% 30.34%,
    55% 30.17%,
    56% 30.06%,
    57% 30%,
    58% 30.01%,
    59% 30.08%,
    60% 30.2%,
    61% 30.39%,
    62% 30.63%,
    63% 30.93%,
    64% 31.29%,
    65% 31.71%,
    66% 32.18%,
    67% 32.7%,
    68% 33.27%,
    69% 33.9%,
    70% 34.57%,
    71% 35.29%,
    72% 36.06%,
    73% 36.86%,
    74% 37.71%,
    75% 38.59%,
    76% 39.5%,
    77% 40.45%,
    78% 41.43%,
    79% 42.43%,
    80% 43.45%,
    81% 44.49%,
    82% 45.55%,
    83% 46.63%,
    84% 47.71%,
    85% 48.8%,
    86% 49.9%,
    87% 50.99%,
    88% 52.08%,
    89% 53.17%,
    90% 54.24%,
    91% 55.3%,
    92% 56.35%,
    93% 57.38%,
    94% 58.39%,
    95% 59.37%,
    96% 60.32%,
    97% 61.24%,
    98% 62.13%,
    99% 62.98%,
    100% 63.79%
  );

  display: grid;
  grid-template-columns: 1fr 1fr;
`

const SubPages = styled.ul`
    justify-self: end;
    color: #efeaec;
`

const SubPagesItem = styled.li`
      display: inline-block;
      padding: 5px;
`

const Logo =styled.div`
color: #dd9700;
padding: 20px;
font-size: 30px;
`;

function Header() {
  return (
    <HeaderContainer>
     <Logo>Gaet</Logo>
      <SubPages>
        <SubPagesItem>About</SubPagesItem>
        <SubPagesItem>Discover</SubPagesItem>
        <SubPagesItem>Contact</SubPagesItem>
      </SubPages>
    </HeaderContainer>
  );
}

export default Header;
