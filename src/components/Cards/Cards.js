import Card from '../Card/Card';
import styled from 'styled-components';

export default function Cards({onBookmark, exercises, filter}) {
  const filteredExercises = exercises.filter(exercise => {
    if (filter === 'Alle') {
      return true;
    }
    if (filter === exercise.category) {
      return true;
    }
    if (filter === 'Favoriten' && exercise.bookmarked) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <StyledWrapper>
      {filteredExercises.length === 0 ? (
        <p>
          Du hast noch keine Favoriten gespeichert. Lass dich weiter inspirieren oder atme einfach ein paar Mal tief
          durch.
        </p>
      ) : (
        filteredExercises.map(({bookmarked, id, category, title, description, repeat, duration, pathname}) => (
          <Card
            onBookmark={onBookmark}
            bookmarked={bookmarked}
            id={id}
            key={id}
            category={category}
            title={title}
            description={description}
            repeat={repeat}
            duration={duration}
            pathname={pathname}
          />
        ))
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
