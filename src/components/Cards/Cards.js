import Card from '../Card/Card';

export default function Cards({onChangeBookmark, exercises, filter}) {
  const filteredExercises = exercises.filter(exercise => {
    if (filter === 'Alle') {
      return true;
    }
    if (filter === exercise.category) {
      return true;
    }
    if (filter === exercise.bookmarked) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <div>
      <>
        {filteredExercises.length === 0 ? (
          <p>
            Du hast noch keine Favoriten gespeichert. Lass dich weiter inspirieren oder atme einfach ein paar mal tief
            durch.
          </p>
        ) : (
          filteredExercises.map(exercise => (
            <Card
              onChangeBookmark={onChangeBookmark}
              bookmarked={exercise.bookmarked}
              id={exercise.id}
              key={exercise.id}
              category={exercise.category}
              description={exercise.description}
              repeat={exercise.repeat}
              duration={exercise.duration}
            />
          ))
        )}
      </>
    </div>
  );
}
