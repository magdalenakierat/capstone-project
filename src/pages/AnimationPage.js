import BackButton from '../components/BackButton';
import BreatheAnimation from '../components/BreatheAnimation/BreatheAnimation';
import CountDownTimer from '../components/CountDownTimer';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function AnimationPage({exerciseDuration}) {
  setTimeout(function () {
    window.open('/', '_self');
  }, exerciseDuration.minutes * 60000);

  return (
    <>
      <Link to="/">
        <BackButton />
      </Link>
      <BreatheAnimation />
      <StyledContainer>
        <CountDownTimer exerciseDuration={exerciseDuration} />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;
