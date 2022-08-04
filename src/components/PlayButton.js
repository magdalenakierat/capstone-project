import styled from 'styled-components';
import PlayIcon from './PlayIcon';

export default function PlayButton() {
  return (
    <StyledButton>
      <PlayIcon />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border: none;
  background-color: black;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  padding-top: 0.2rem;
  &:hover {
    background-color: darkgrey;
  }
`;
