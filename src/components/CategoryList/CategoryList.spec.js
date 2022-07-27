import {render, screen} from '@testing-library/react';
import CategoryList from './CategoryList';

describe('CategoryList', () => {
  it('renders four list items, each containing one button', () => {
    render(<CategoryList />);

    const alle = screen.getByRole('button', {name: /Alle/i});
    const atem = screen.getByRole('button', {name: /Atem/i});
    const augen = screen.getByRole('button', {name: /Augen/i});
    const bewegung = screen.getByRole('button', {name: /Bewegung/i});

    expect(alle).toBeInTheDocument();
    expect(atem).toBeInTheDocument();
    expect(augen).toBeInTheDocument();
    expect(bewegung).toBeInTheDocument();
  });
});
