import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => {
        const recipe = data.find((item) => item.id === parseInt(id));
        setRecipe(recipe);
      });
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-gray-700 mb-6">{recipe.summary}</p>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {/* Add ingredients here */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Cooking Instructions</h2>
        <p className="text-gray-700">
          {/* Add cooking instructions here */}
          Step-by-step instructions to prepare the recipe.
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
