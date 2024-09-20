// src/App.jsx
import React from 'react';
import Search from './components/Search';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>GitHub User Search</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

