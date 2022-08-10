import styled from 'styled-components';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import NoBookmarkIcon from '../NoBookmarkIcon/NoBookmarkIcon';

export default function Bookmark({onBookmark, bookmarked, id}) {
  return (
    <StyledBookmark onClick={() => onBookmark(id)}>{bookmarked ? <BookmarkIcon /> : <NoBookmarkIcon />}</StyledBookmark>
  );
}

const StyledBookmark = styled.button`
  border: none;
  background-color: var(--primary-color-light);
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  padding-top: 0.2rem;
`;
