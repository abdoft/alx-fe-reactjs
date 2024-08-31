// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    
    // Check if initial todos are present
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    // Add new todo
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    
    // Verify the new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    
    const todo = screen.getByText('Learn React');
    
    // Toggle completion (check if the text gets a line-through)
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    
    // Toggle back to incomplete (line-through removed)
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const todo = screen.getByText('Learn React');
    
    // Click delete button for the first todo
    fireEvent.click(screen.getAllByText('Delete')[0]);
    
    // Verify the todo is deleted
    expect(todo).not.toBeInTheDocument();
  });
});
