import Card from '../Card/Card';

export default function Cards({exercises, filter}) {
  const filteredExercises = exercises.filter(exercise => {
    if (filter === 'Alle') {
      return true;
    }
    if (filter === exercise.category) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <div>
      <>
        {filteredExercises.map(exercise => (
          <Card
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
