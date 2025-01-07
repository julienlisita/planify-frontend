// RecipeContext.jsx
import { createContext, useContext } from 'react';

const RecipeContext = createContext();
export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  return <RecipeContext.Provider value={{ recipes: [] }}>{children}</RecipeContext.Provider>;
};