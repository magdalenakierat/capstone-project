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
    }
  });
  return (
    <div>
      <>
        {filteredExercises.map(exercise => (
          <Card
            id={exercise.id}
            onChangeBookmark={onChangeBookmark}
            key={exercise.id}
            category={exercise.category}
            description={exercise.description}
            repeat={exercise.repeat}
            duration={exercise.duration}
          />
        ))}
      </>
    </div>
  );
}
