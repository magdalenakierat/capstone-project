import styled from 'styled-components';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import NoBookmarkIcon from '../NoBookmarkIcon/NoBookmarkIcon';

export default function Bookmark({onBookmark, bookmarked, id}) {
  return (
    <StyledBookmark onClick={() => onBookmark(id)}>{bookmarked ? <BookmarkIcon /> : <NoBookmarkIcon />}</StyledBookmark>
  );
}

const StyledBookmark = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
`;
