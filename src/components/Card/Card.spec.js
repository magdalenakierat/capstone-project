import {render, screen} from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders a card with a heading and two paragraphs', () => {
    render(<Card />);

    const heading = screen.getByRole('heading');
    const description = screen.getByTestId('description');
    const duration = screen.getByTestId('duration');

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
  });
});
