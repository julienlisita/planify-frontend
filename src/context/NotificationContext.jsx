// NotificationContext.jsx
import { createContext, useContext } from 'react';

const NotificationContext = createContext();
export const useNotificationContext = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  return <NotificationContext.Provider value={{ notifications: [] }}>{children}</NotificationContext.Provider>;
};