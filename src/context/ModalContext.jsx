// ModalContext.jsx
import { createContext, useContext } from 'react';

const ModalContext = createContext();
export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  return <ModalContext.Provider value={{ isOpen: false }}>{children}</ModalContext.Provider>;
};