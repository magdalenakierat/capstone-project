import styled from 'styled-components';

export default function Card(props) {
  return (
    <CardContainer>
      <h2>{props.category}</h2>
      <p data-testid="description">{props.description}</p>
      <Timing>
        <p data-testid="repeat">Wiederholung: {props.repeat}</p>
        <p data-testid="duration">Dauer: {props.duration}</p>
      </Timing>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 8px rgba(102, 102, 102, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Timing = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin-top: 1rem;
  padding-top: 1rem;
`;
