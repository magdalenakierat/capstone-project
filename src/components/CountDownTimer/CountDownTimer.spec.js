import {render, screen} from '@testing-library/react';
import CountDownTimer from './CountDownTimer';

const exampleDuration = {minutes: 1};

describe('CountDownTimer', () => {
  it('renders the CountDownTimer component', () => {
    render(<CountDownTimer exerciseDuration={exampleDuration.minutes} />);

    const timer = screen.getByTestId('timer');

    expect(timer).toBeInTheDocument();
  });
});
