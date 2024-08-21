import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleClick = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to the homepage or recipe list after deletion
  };

  return (
    <button onClick={handleClick}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
