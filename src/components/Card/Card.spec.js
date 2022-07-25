import {render, screen} from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders a card with a heading and three paragraphs', () => {
    render(<Card />);

    const heading = screen.getByRole('heading');
    const description = screen.getByTestId('description');
    const repeat = screen.getByTestId('repeat');
    const duration = screen.getByTestId('duration');

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(repeat).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
  });
});
