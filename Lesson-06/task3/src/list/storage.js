export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  // Object.assign(storage, { [key]: value });
};

export const getItem = (key) => JSON.parse(localStorage.getItem(key));
