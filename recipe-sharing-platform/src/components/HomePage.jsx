import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json'; // Adjust the path if necessary

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from the JSON file or an API
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link 
            to={`/recipe/${recipe.id}`} 
            key={recipe.id} 
            className="no-underline"
          >
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-40 object-cover rounded mb-4" 
              />
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
