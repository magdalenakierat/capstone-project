import styled from 'styled-components';
import Card from './components/Card/Card';

export default function App() {
  return (
    <Wrapper>
      <h1>Pausen</h1>
      <main>
        <Card />
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
