// localStorageUtils.js
export const saveToLocalStorage = (key, value) => {
    // Save data to local storage
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getFromLocalStorage = (key) => {
    // Get data from local storage
    return JSON.parse(localStorage.getItem(key));
  };