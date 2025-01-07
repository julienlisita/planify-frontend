// ThemeContext.jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={{ theme: 'light' }}>{children}</ThemeContext.Provider>;
};