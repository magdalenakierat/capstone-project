import styled, {keyframes} from 'styled-components';

export default function BreatheAnimation() {
  return (
    <Container>
      <Circle />
      <StyledSpanIn>Ein</StyledSpanIn>
      <StyledSpanOut>Aus</StyledSpanOut>
    </Container>
  );
}
const breatheAnimation = keyframes`
 0% { height: 50px; width: 50px; opacity: 0.6; }
 50% { height: 205px; width: 205px; opacity: 1; }
 100% { height: 50px; width: 50px; opacity: 0.6; }
`;

const textAnimationIn = keyframes`
 0% { opacity: 0; }
 25% { opacity: 1; }
 49% { opacity: 0; }
 100% { opacity: 0; }
`;

const textAnimationOut = keyframes`
 0% { opacity: 0; }
 51% { opacity: 0; }
 75% { opacity: 1; }
 100% { opacity: 0; }
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1;
  height: 50px;
  width: 50px;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  border-color: black;
  animation-name: ${breatheAnimation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`;

const StyledSpanIn = styled.span`
  position: absolute;
  z-index: 2;
  animation-name: ${textAnimationIn};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

const StyledSpanOut = styled.span`
  position: absolute;
  z-index: 3;
  animation-name: ${textAnimationOut};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;
