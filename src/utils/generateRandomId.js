// generateRandomId.js
export const generateRandomId = () => {
    // Generate a random ID
    return Math.random().toString(36).substr(2, 9);
  };