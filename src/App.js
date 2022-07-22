import styled from 'styled-components';
import Card from './components/Card/Card';

export default function App() {
  const excercises = [
    {
      id: 'e1',
      category: 'Atemübung',
      description: '4 Sekunden tief einatmen, 7 Sekunden ruhig ausatmen',
      repeat: 'alle 60 Minuten',
      duration: 'für 5 Minuten',
    },
    {
      id: 'e2',
      category: 'Augenübung',
      description: 'Blick vom Bildschirm weg in die Ferne schweifen lassen',
      repeat: 'alle 20 Minuten',
      duration: 'für 20 Sekunden',
    },
    {
      id: 'e3',
      category: 'Bewegung',
      description: 'Hinstellen, ganzen Körper strecken und Gelenke kreisen',
      repeat: 'alle 30 Minuten',
      duration: 'für 2 Minuten',
    },
  ];

  return (
    <Wrapper>
      <h1>Pausen</h1>
      <main>
        <Card
          category={excercises[0].category}
          description={excercises[0].description}
          repeat={excercises[0].repeat}
          duration={excercises[0].duration}
        />
        <Card
          category={excercises[1].category}
          description={excercises[1].description}
          repeat={excercises[1].repeat}
          duration={excercises[1].duration}
        />
        <Card
          category={excercises[2].category}
          description={excercises[2].description}
          repeat={excercises[2].repeat}
          duration={excercises[2].duration}
        />
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
