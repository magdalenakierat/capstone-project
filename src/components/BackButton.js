import styled from 'styled-components';
import BackIcon from './BackIcon';

export default function BackButton() {
  return (
    <StyledButton>
      <BackIcon />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  margin-left: auto;
  border: none;
  background-color: #919191;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  padding-top: 0.2rem;
  &:hover {
    background-color: black;
  }
`;
