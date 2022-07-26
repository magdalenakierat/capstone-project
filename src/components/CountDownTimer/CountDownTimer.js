import {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function CountDownTimer({exerciseDuration}) {
  const {minutes = 0, seconds = 60} = exerciseDuration;
  const [[mins, secs], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (mins === 0 && secs === 0) reset();
    else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <StyledParagraph data-testid="timer">{`${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`}</StyledParagraph>
  );
}

const StyledParagraph = styled.p`
  font-size: 4rem;
  line-height: 4rem;
  color: var(--primary-color);
  font-weight: 300;
  min-width: 10.6rem;
`;
