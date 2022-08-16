import {render, screen} from '@testing-library/react';
import Bookmark from './Bookmark';

describe('Bookmark', () => {
  it('renders the Bookmark component', () => {
    render(<Bookmark />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
