import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('toggles a todo', () => {
  render(<TodoList />);
  
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);
  
  expect(todo).toHaveStyle('text-decoration: line-through');
  
  fireEvent.click(todo);
  
  expect(todo).toHaveStyle('text-decoration: none');
});
