import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // Importing necessary functions
import '@testing-library/jest-dom'; // For additional matchers
import TodoList from '../components/TodoList'; // Adjust the path as needed

// Initial Render Test
test('renders TodoList component with initial todos', () => {
  render(<TodoList />); // Render the TodoList component
  expect(screen.getByText('Learn React')).toBeInTheDocument(); // Check if initial todos are present
  expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
});

// Test Adding Todos
test('adds a new todo', () => {
  render(<TodoList />);

  // Simulate user input and form submission
  fireEvent.change(screen.getByPlaceholderText('Enter new todo'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));

  // Verify the new todo is added
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

// Test Toggling Todos
test('toggles todo completion status', () => {
  render(<TodoList />);

  const todo = screen.getByText('Learn React');
  fireEvent.click(todo); // Toggle the todo item

  // Verify the todo is marked as completed
  expect(todo).toHaveStyle('text-decoration: line-through');
});

// Test Deleting Todos
test('deletes a todo', () => {
  render(<TodoList />);

  // Find and click the delete button
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);

  // Verify the todo is removed
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});

