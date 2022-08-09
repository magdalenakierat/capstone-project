import {useState, useEffect} from 'react';
import Cards from '../components/Cards/Cards';
import CategoryList from '../components/CategoryList/CategoryList';
import db from '../db';
import {loadFromLocalStorage, writeToLocalStorage} from '../util/LocalStorage';
import styled from 'styled-components';

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
      <StyledHeading>Entdecken</StyledHeading>
      <section>
        <h2>Filtern</h2>
        <CategoryList filter={filter} onFilter={handleFilter} />
      </section>
      <Cards filter={filter} exercises={exercises} onBookmark={handleBookmark} />
    </>
  );
}

const StyledHeading = styled.h1`
  display: inline-block;
  padding-bottom: 0.5rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 2.8rem;
    height: 3px;
    bottom: 0;
    border-bottom: 3px solid var(--primary-color);
  }
`;
