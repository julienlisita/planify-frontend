// ShoppingListContext.jsx
import { createContext, useContext } from 'react';

const ShoppingListContext = createContext();
export const useShoppingListContext = () => useContext(ShoppingListContext);

export const ShoppingListProvider = ({ children }) => {
  return <ShoppingListContext.Provider value={{ shoppingList: [] }}>{children}</ShoppingListContext.Provider>;
};