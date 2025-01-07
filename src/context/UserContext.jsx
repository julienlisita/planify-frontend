// UserContext.jsx
import { createContext, useContext } from 'react';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{ user: null }}>{children}</UserContext.Provider>;
};
