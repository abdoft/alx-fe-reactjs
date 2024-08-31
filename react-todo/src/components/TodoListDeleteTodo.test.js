import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('deletes a todo', () => {
  render(<TodoList />);
  
  fireEvent.click(screen.getAllByText('Delete')[0]);
  
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
