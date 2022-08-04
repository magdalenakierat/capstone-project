import styled from 'styled-components';
import Bookmark from '../Bookmark/Bookmark';
import PlayButton from '../PlayButton';

export default function Card({id, onBookmark, bookmarked, category, description, repeat, duration}) {
  return (
    <CardContainer>
      <Bookmark id={id} bookmarked={bookmarked} onBookmark={onBookmark} />
      <h2>{category}</h2>
      <p data-testid="description">{description}</p>
      <StyledList>
        <li data-testid="repeat">Wiederholung: {repeat}</li>
        <li data-testid="duration">Dauer: {duration}</li>
      </StyledList>
      <PlayButton />
    </CardContainer>
  );
}

const CardContainer = styled.article`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 8px rgba(102, 102, 102, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
`;

const StyledList = styled.ul`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin-top: 1rem;
  padding-top: 1rem;
  list-style-type: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
