import {render, screen} from '@testing-library/react';
import BackButton from './BackButton';

describe('BackButton', () => {
  it('renders the BackButton component', () => {
    render(<BackButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
