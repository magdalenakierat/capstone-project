import {useState, useEffect} from 'react';
import Cards from '../components/Cards/Cards';
import CategoryList from '../components/CategoryList/CategoryList';
import db from '../db';
import {loadFromLocalStorage, writeToLocalStorage} from '../util/LocalStorage';

export default function HomePage() {
  const [filter, setFilter] = useState('Alle');

  const [exercises, setExercise] = useState(() => {
    const exercisesFromLocal = loadFromLocalStorage('exercises');
    return exercisesFromLocal ?? db;
  });

  function handleFilter(stringToFilter) {
    setFilter(stringToFilter);
  }

  function handleBookmark(id) {
    setExercise(
      exercises.map(exercise => {
        if (exercise.id === id) {
          return {...exercise, bookmarked: !exercise.bookmarked};
        }
        return exercise;
      })
    );
  }

  useEffect(() => {
    writeToLocalStorage('exercises', exercises);
  }, [exercises]);

  return (
    <>
      <h1>Pausen</h1>
      <section>
        <h2>Nach Kategorie filtern</h2>
        <CategoryList filter={filter} onFilter={handleFilter} />
      </section>
      <Cards filter={filter} exercises={exercises} onBookmark={handleBookmark} />
    </>
  );
}
