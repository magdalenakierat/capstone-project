import {render, screen} from '@testing-library/react';
import Cards from './Cards';

const exampleExercises = [
  {
    id: 'e2',
    bookmarked: false,
    category: 'Augenübung',
    title: 'Gucken und fühlen',
    pathname: '/',
    description: 'Blick vom Bildschirm weg in die Ferne schweifen lassen',
    duration: '20 Sekunden',
  },
  {
    id: 'e3',
    bookmarked: false,
    category: 'Bewegung',
    title: 'Kurze Auflockerung',
    pathname: '/',
    description: 'Hinstellen, ganzen Körper strecken und Gelenke kreisen',
    duration: '2 Minuten',
  },
];

describe('Cards', () => {
  it('renders the Cards component', () => {
    render(
      <Cards
        onBookmark={() => console.log('Bookmark was clicked.')}
        exercises={exampleExercises}
        filter={exampleExercises.category}
      />
    );

    const cards = screen.getByTestId('cards');

    expect(cards).toBeInTheDocument();
  });
});
