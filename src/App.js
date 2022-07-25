import styled from 'styled-components';
import Cards from './components/Cards/Cards';
import excercises from './db';

export default function App() {
  return (
    <Wrapper>
      <h1>Pausen</h1>
      <main>
        <Cards excercises={excercises} />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
