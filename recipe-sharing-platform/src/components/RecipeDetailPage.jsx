import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetailPage = () => {
  const { id } = useParams();

  // Mock recipe data
  const recipe = {
    title: 'Spaghetti Carbonara',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Black Pepper'],
    instructions: 'Cook pasta. Mix eggs and cheese. Cook pancetta. Combine all.'
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center py-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Recipe Detail</h1>
      </header>
      <main className="container mx-auto mt-6">
        <h2 className="text-2xl font-semibold">{recipe.title}</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Ingredients:</h3>
          <ul className="list-disc list-inside mt-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-4">Instructions:</h3>
          <p className="text-gray-700 mt-2">{recipe.instructions}</p>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetailPage;
