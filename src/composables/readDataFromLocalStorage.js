const createAppDataIfNotExist = () => {
  const storedDataString = localStorage.getItem('appData');
  if (!storedDataString) {
    const initialData = { habits: {}, id: 0 };
    localStorage.setItem('appData', JSON.stringify(initialData));
  }
};

const readDataFromLocalStorage = () => {
  createAppDataIfNotExist();
  const storedDataString = localStorage.getItem('appData');
  return JSON.parse(storedDataString);
};

export default readDataFromLocalStorage;
