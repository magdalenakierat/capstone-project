import styled from 'styled-components';
import Cards from './components/Cards/Cards';
import CategoryList from './components/CategoryList/CategoryList';
import excercises from './db';

export default function App() {
  return (
    <StyledWrapper>
      <h1>Pausen</h1>
      <section>
        <h2>Kategorie</h2>
        <CategoryList />
      </section>
      <Cards excercises={excercises} />
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
