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
  background-color: var(--primary-color-light);
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  padding-top: 0.2rem;
`;
