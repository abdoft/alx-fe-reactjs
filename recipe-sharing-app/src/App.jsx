import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { Link, Route, Routes, Router } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to = "/">Home</Link>
          <Link to = "/add-recipe">Add Recipe</Link>
        </nav>
      </header>
      <main>
      <h1>Recipe Sharing App</h1>
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
      
      <SearchBar />
      <Routes>
      <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;


