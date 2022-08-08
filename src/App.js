import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import AnimationPage from './pages/AnimationPage';

export default function App() {
  const exerciseDuration = {minutes: 5, seconds: 0};

  return (
    <StyledWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animation" element={<AnimationPage exerciseDuration={exerciseDuration} />} />
      </Routes>
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
