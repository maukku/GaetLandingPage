import styled from "styled-components";
const Item = styled.img`
  src: ${(props) => props.src};
  max-height: 350px;
`;

const Text = styled.div`
  width: fit-content;
  text-align: center;
`;
const Title = styled.div`
  margin: 15px;
`;

const Container = styled.div`
  display: grid;
  justify-items: center;
  padding: 20px;
;
 margin-block: 100px;
`;
export const CarouselItem = ({ text, src, title }) => {
  return (
    <Container>
      <Item src={src} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};
