import styled from 'styled-components';

export default function Bookmark() {
  return (
    <>
      <StyledBookmark className="material-symbols-outlined">favorite</StyledBookmark>
    </>
  );
}

const StyledBookmark = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: black;
  font-size: 1rem;
  border: none;
  background-color: transparent;
`;
