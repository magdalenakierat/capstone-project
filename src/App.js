import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Cards from './components/Cards/Cards';
import CategoryList from './components/CategoryList/CategoryList';
// import BreatheAnimation from './components/BreatheAnimation/BreatheAnimation';
// import CountDownTimer from './components/CountDownTimer';
import db from './db';
import {loadFromLocalStorage, writeToLocalStorage} from './util/LocalStorage';

export default function App() {
  const minSecs = {minutes: 5, seconds: 0};

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
    <StyledWrapper>
      <h1>Pausen</h1>
      <section>
        <h2>Nach Kategorie filtern</h2>
        <CategoryList filter={filter} onFilter={handleFilter} />
      </section>
      <Cards filter={filter} exercises={exercises} onBookmark={handleBookmark} />
      {/* <BreatheAnimation /> */}
      {/* <CountDownTimer minSecs={minSecs} /> */}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  max-width: 860px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
