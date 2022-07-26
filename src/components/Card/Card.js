import styled from 'styled-components';
import Bookmark from '../Bookmark/Bookmark';
import PlayButton from '../PlayButton/PlayButton';
import {Link} from 'react-router-dom';

export default function Card({id, onBookmark, bookmarked, category, title, description, duration, pathname}) {
  return (
    <CardContainer>
      <h2>
        <StyledSpan>{category}</StyledSpan>
        {title}
      </h2>
      <p data-testid="description">{description}</p>
      <StyledFooter>
        <p data-testid="duration">
          <StyledSpanStrong>Dauer:</StyledSpanStrong> {duration}
        </p>
        <div>
          <Bookmark id={id} bookmarked={bookmarked} onBookmark={onBookmark} />
          {pathname === '/' || (
            <Link to={pathname}>
              <PlayButton />
            </Link>
          )}
        </div>
      </StyledFooter>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  background-color: #fff;
  box-shadow: 0 8px 8px rgba(102, 102, 102, 0.05);
  border-radius: 2rem;
  padding: 1rem 1rem 1rem 1.5rem;
  position: relative;
  @media (min-width: 600px) {
    width: 48%;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 0;
`;

const StyledSpan = styled.span`
  display: block;
  font-size: 0.75rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  color: var(--text-color-light);
  font-weight: 400;
  margin-bottom: -0.2rem;
`;

const StyledSpanStrong = styled.span`
  font-weight: 600;
`;
