import {render, screen} from '@testing-library/react';
import PlayButton from './PlayButton';

describe('PlayButton', () => {
  it('renders the PlayButton component', () => {
    render(<PlayButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
