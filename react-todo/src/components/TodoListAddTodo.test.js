import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('adds a new todo', () => {
  render(<TodoList />);
  
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});
