import React, { useState } from 'react'; // Import React and useState

// TodoList Component
const TodoList = () => {
  // State to manage the list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo List', completed: false },
  ]);

  // Function to add a new todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id} // Key attribute for unique list items
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the toggle event
              deleteTodo(todo.id);
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

// AddTodoForm Component
const AddTodoForm = ({ addTodo }) => {
  const [input, setInput] = useState(''); // State to manage input field value

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addTodo(input);
      setInput(''); // Clear the input field after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoList; // Exporting the component
