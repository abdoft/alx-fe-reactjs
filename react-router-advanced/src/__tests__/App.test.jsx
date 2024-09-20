import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test('renders Home page by default', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});

// Add more tests for other routes and components
