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
      <StyledHeading>Übungen entdecken</StyledHeading>
      <StyledDiv>
        <CategoryList filter={filter} onFilter={handleFilter} />
      </StyledDiv>
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

const StyledDiv = styled.section`
  position: sticky;
  top: 0;
  z-index: 5;
  background: linear-gradient(180deg, rgba(246, 247, 252, 1) 85%, rgba(246, 247, 252, 0) 100%);
  padding-top: 0.5rem;
`;
