import styled, {keyframes} from 'styled-components';

export default function BreatheAnimation() {
  return (
    <Container>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <StyledSpanIn>EIN</StyledSpanIn>
      <StyledSpanOut>AUS</StyledSpanOut>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`;

const breatheAnimation1 = keyframes`
 0% { height: 70px; width: 70px; opacity: 0.8; }
 50% { height: 200px; width: 200px; opacity: 1; }
 100% { height: 70px; width: 70px; opacity: 0.8; }
`;

const Circle1 = styled.div`
  position: absolute;
  z-index: 1;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  animation-name: ${breatheAnimation1};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

const breatheAnimation2 = keyframes`
 0% { height: 70px; width: 70px; opacity: 0.4; }
 50% { height: 260px; width: 260px; opacity: 0.5; }
 100% { height: 70px; width: 70px; opacity: 0.4; }
`;

const Circle2 = styled.div`
  position: absolute;
  z-index: 2;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  animation-name: ${breatheAnimation2};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

const breatheAnimation3 = keyframes`
 0% { height: 70px; width: 70px; opacity: 0.2; }
 50% { height: 300px; width: 300px; opacity: 0.3; }
 100% { height: 70px; width: 70px; opacity: 0.2; }
`;

const Circle3 = styled.div`
  position: absolute;
  z-index: 3;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  animation-name: ${breatheAnimation3};
  animation-duration: 10s;
  animation-iteration-count: infinite;
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

const StyledSpanIn = styled.span`
  position: absolute;
  color: #fff;
  font-weight: 400;
  z-index: 4;
  animation-name: ${textAnimationIn};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

const StyledSpanOut = styled.span`
  position: absolute;
  color: #fff;
  font-weight: 400;
  z-index: 5;
  animation-name: ${textAnimationOut};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;
