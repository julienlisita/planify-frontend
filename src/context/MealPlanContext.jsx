// MealPlanContext.jsx
import { createContext, useContext } from 'react';

const MealPlanContext = createContext();
export const useMealPlanContext = () => useContext(MealPlanContext);

export const MealPlanProvider = ({ children }) => {
  return <MealPlanContext.Provider value={{ mealPlan: [] }}>{children}</MealPlanContext.Provider>;
};