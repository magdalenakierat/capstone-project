import React from 'react';
import styled, {keyframes} from 'styled-components';

export default function BreatheAnimation() {
  return (
    <Container>
      <Circle />
    </Container>
  );
}
const breatheAnimation = keyframes`
 0% { height: 50px; width: 50px;opacity: 0.6; }
 35% { height: 200px; width: 200px; opacity: 0.9 }
 45% { height: 205px; width: 205px; opacity: 1; }
 100% { height: 50px; width: 50px; opacity: 0.6; }
`;
const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  border-color: black;
  animation-name: ${breatheAnimation};
  animation-duration: 11s;
  animation-iteration-count: infinite;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* width: 100%; */
  height: 450px;
`;
