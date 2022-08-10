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
          Du hast noch keine Favoriten gespeichert. Lass dich weiter inspirieren oder atme einfach ein paar mal tief
          durch.
        </p>
      ) : (
        filteredExercises.map(exercise => (
          <Card
            onBookmark={onBookmark}
            bookmarked={exercise.bookmarked}
            id={exercise.id}
            key={exercise.id}
            category={exercise.category}
            title={exercise.title}
            description={exercise.description}
            repeat={exercise.repeat}
            duration={exercise.duration}
            pathname={exercise.pathname}
          />
        ))
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 -0.5rem;
`;
