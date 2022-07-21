import styled from 'styled-components';

export default function App() {
  return (
    <Wrapper>
      <h1>Pausen</h1>
      <main>
        <Card>
          <h2>Atemübung</h2>
          <p>4 Sekunden tief einatmen, 7 Sekunden ruhig ausatmen</p>
          <Timing>
            <p>Wiederholung: alle 60 Minuten</p>
            <p>Dauer: 5 Minuten</p>
          </Timing>
        </Card>
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

const Card = styled.article`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 8px 8px rgba(102, 102, 102, 0.05);
  border-radius: 1rem;
  padding: 1rem;
`;
const Timing = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin-top: 1rem;
  padding-top: 1rem;
`;
