import { render, screen } from '@testing-library/react';
import Players from '../components/Players/Players';
import App from './App';

describe('Search Bar', () => {
  beforeEach(() => render(<App />));

  it('must display a button.', () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  it('must display an input.', () => {
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toBeInTheDocument();
  });
})

describe('Players', () => {
  const result = ["Alex Acker - Hassan Adams", "Arron Afflalo - Maurice Ager"];

  it('must display "No matches found" if there\'s no results.', () => {
    render(<Players result={"Empty"} />)
    const innerElement = screen.getByText(/No matches found/i);
    expect(innerElement).toBeInTheDocument();
  });

  it('must display the information.', () => {
    render(<Players result={result} />)
    const innerElement = screen.getByText(/Alex Acker - Hassan Adams/i);
    expect(innerElement).toBeInTheDocument();
  });
})
