import {useState} from 'react';
import styled from 'styled-components';
import Cards from './components/Cards/Cards';
import CategoryList from './components/CategoryList/CategoryList';
import exercises from './db';

export default function App() {
  const [filter, setFilter] = useState('Alle');

  function handleFilter(stringToFilter) {
    setFilter(stringToFilter);
  }

  return (
    <StyledWrapper>
      <h1>Pausen</h1>
      <section>
        <h2>Nach Kategorie filtern</h2>
        <CategoryList onFilter={handleFilter} />
      </section>
      <Cards filter={filter} exercises={exercises} />
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
