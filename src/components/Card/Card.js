import styled from 'styled-components';

export default function Card() {
  return (
    <CardContainer>
      <h2>Atemübung</h2>
      <p>4 Sekunden tief einatmen, 7 Sekunden ruhig ausatmen</p>
      <Timing>
        <p>Wiederholung: alle 60 Minuten</p>
        <p>Dauer: 5 Minuten</p>
      </Timing>
    </CardContainer>
  );
}

const CardContainer = styled.article`
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
