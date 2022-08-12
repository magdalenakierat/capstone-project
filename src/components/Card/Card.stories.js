import Card from './Card';

const exampleExercise = {
  bookmarked: false,
  category: 'Atemübung',
  title: 'Herzkohärenz',
  description: '5 Sekunden tief einatmen, 5 Sekunden ruhig ausatmen',
  duration: '5 Minuten',
};

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <Card
    bookmarked={exampleExercise.bookmarked}
    category={exampleExercise.category}
    title={exampleExercise.title}
    description={exampleExercise.description}
    duration={exampleExercise.duration}
  />
);
