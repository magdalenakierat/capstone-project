import styled from 'styled-components';
import Cards from './components/Cards/Cards';

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
