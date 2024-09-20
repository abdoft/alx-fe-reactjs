import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Snackbar from './components/Snackbar';

function App() {
  return (
    <div className="p-4">
      <TaskForm />
      <TaskList />
      <Snackbar />
    </div>
  );
}

export default App;