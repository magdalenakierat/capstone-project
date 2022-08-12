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
  border: none;
  background-color: var(--primary-color);
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  padding-top: 0.2rem;
  margin-left: 0.5rem;
  &:hover {
    background-color: var(--text-color);
  }
`;
