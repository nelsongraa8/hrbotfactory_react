import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/azul/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/amarillo/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 3', () => {
  render(<App />);
  const linkElement = screen.getByText(/verde/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 4', () => {
  render(<App />);
  const linkElement = screen.getByText(/rojo/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 5', () => {
  render(<App />);
  const linkElement = screen.getByText(/Random/i);
  expect(linkElement).toBeInTheDocument();
});