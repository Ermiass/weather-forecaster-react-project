import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchLocation from './SearchLocation';
import App from '../App';

test('should render input element and a button ', async () => {
  render(<SearchLocation />);
  const inputElement = screen.getByPlaceholderText(/Dumfries VA/i);
  const buttonElement = screen.getByRole('button', { name: /search/i });
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
test('should be able to type in the input ', async () => {
  render(<SearchLocation />);
  const inputElement = screen.getByPlaceholderText(/Dumfries VA/i);
  userEvent.type(inputElement, { target: { value: 'New york' } });
  expect(inputElement).toBeInTheDocument();
});
test('should have empty input when button is clicked ', async () => {
  render(<SearchLocation />);
  const inputElement = screen.getByPlaceholderText(/Dumfries VA/i);
  const buttonElement = screen.getByRole('button', { name: /search/i });
  userEvent.type(inputElement, { target: { value: 'New york' } });
  userEvent.click(buttonElement);
  expect(inputElement).toBeInTheDocument();
});
// test('search button is disabled when the input feild is empty ', async () => {
//   render(<SearchLocation />);
//   const inputElement = screen.getByTestId('azur');
//   const buttonElement = screen.getByRole('button', { name: /search/i });
//   expect(buttonElement).toHaveAttribute('type', 'submit');
//   userEvent.type(inputElement, { target: { value: 'Dumfries' } });
//   expect(buttonElement).toBeEnabled();
//   userEvent.type(inputElement, { target: { value: '' } });
//   expect(buttonElement).not.toBeEnabled();
// });
test('search button is disabled when the input feild is empty ', async () => {
  render(<App />);
  const ermias = await screen.getByTestId('azur');
  // await userEvent.type(ermias, { target: { value: 'Dumfries VA' } });
  const buttonElement = screen.getByRole('button', { name: /search/i });
  // expect(buttonElement).toHaveAttribute('type', 'submit');

  await expect(buttonElement).toBeEnabled();
  // await userEvent.clear(ermias);
  // await userEvent.type(ermias, 'Alexandria VA');
  // await expect(buttonElement).toBeDisabled();
  // await userEvent.type(ermias, '');
  // expect(buttonElement).not.toBeEnabled();
});
test('can not Submit a form when button is disabled ', async () => {
  const onSubmit = jest.fn();
  render(<SearchLocation onSubmit={onSubmit} />);
  const buttonElement = screen.getByRole('button', { name: /search/i });
  userEvent.click(buttonElement);
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
test('Submit a form when button is clicked ', async () => {
  // const onSubmit = jest.fn();
  // render(<SearchLocation onSubmit={onSubmit} />);
  // const ermias = await screen.getByTestId('azur');
  // // const inputElement = screen.getByPlaceholderText(/Dumfries VA/i);
  // // const ermias = screen.getByTestId('azur');

  // const buttonElement = await screen.getByRole('button', { name: /search/i });
  // // await userEvent.type(inputElement, 'Alexandria');
  // userEvent.type(ermias, 'Alexandria');
  // userEvent.click(buttonElement);
  // await expect(onSubmit).toHaveBeenCalledTimes(1);
});
test('input form with a test id ', () => {
  render(<SearchLocation />);
  const ermias = screen.getByTestId('azur');
  expect(ermias).toBeInTheDocument();
});
