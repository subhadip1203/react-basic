// get data from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

// save data in localStorage
export const saveState = (state) => {
  const savedData = { ...state };
  delete savedData.auth.error;
  try {
    const serializedState = JSON.stringify(savedData);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('could not saved in local storage');
  }
};
