import styled from 'styled-components';
import {useState} from 'react';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import NoBookmarkIcon from '../NoBookmarkIcon/NoBookmarkIcon';

export default function Bookmark() {
  const [bookmark, setBookmark] = useState(false);

  const handleClick = () => {
    setBookmark(!bookmark);
  };

  return <StyledBookmark onClick={handleClick}>{bookmark ? <BookmarkIcon /> : <NoBookmarkIcon />}</StyledBookmark>;
}

const StyledBookmark = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
`;
