import create from 'zustand';
import useMessageStore from './useMessageStore';

const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const useTaskStore = create((set) => ({
  tasks: loadTasks(),
  addTask: (task) => {
    try {
      if (!task.title.trim()) {
        useMessageStore.getState().setMessage('Task title cannot be empty', 'error');
        return;
      }
      set((state) => {
        const newTasks = [...state.tasks, task].sort((a, b) => a.completed - b.completed);
        saveTasks(newTasks);
        return { tasks: newTasks };
      });
      useMessageStore.getState().setMessage('Task added successfully', 'success');
    } catch (error) {
      console.error('Error adding task:', error);
      useMessageStore.getState().setMessage('Error adding task', 'error');
    }
  },
  removeTask: (id) => {
    try {
      set((state) => {
        const newTasks = state.tasks.filter(task => task.id !== id).sort((a, b) => a.completed - b.completed);
        saveTasks(newTasks);
        return { tasks: newTasks };
      });
      useMessageStore.getState().setMessage('Task removed successfully', 'success');
    } catch (error) {
      console.error('Error removing task:', error);
      useMessageStore.getState().setMessage('Error removing task', 'error');
    }
  },
  toggleTask: (id) => {
    try {
      set((state) => {
        const newTasks = state.tasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ).sort((a, b) => a.completed - b.completed);
        saveTasks(newTasks);
        return { tasks: newTasks };
      });
      useMessageStore.getState().setMessage('Task status updated successfully', 'success');
    } catch (error) {
      console.error('Error toggling task:', error);
      useMessageStore.getState().setMessage('Error toggling task', 'error');
    }
  },
  fetchTasks: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      set({ tasks: data.slice(0, 5).sort((a, b) => a.completed - b.completed) });
      useMessageStore.getState().setMessage('Tasks fetched successfully', 'success');
    } catch (error) {
      console.error('Error fetching tasks:', error);
      useMessageStore.getState().setMessage('Error fetching tasks', 'error');
    }
  },
}));

export default useTaskStore;