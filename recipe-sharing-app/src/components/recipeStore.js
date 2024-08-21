import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term)=> set(state => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return{searchTerm: term, filteredRecipes: filtered};
  }),
    setRecipes: (recipes)=> set(state => ({
      recipes: recipes,
      filteredRecipes: recipes
    })),
  
   //Action to add new recipe
   addRecipe: (newRecipe) => set (state =>({
    recipes: [...state.recipes, newRecipe]
   })),
   //Action to update an existing recipe
   updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipeRecipe : recipe
    )
   })),
   //Action to delete a recipe
   deleteRecipe: (recipeId) => set(state =>({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
   })),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  
  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Recommendations logic
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock recommendation system: Recommend based on favorite recipes
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
