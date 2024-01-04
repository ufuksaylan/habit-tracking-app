import readData from '../../composables/readDataFromLocalStorage';

const localStorageUtils = () => {
  const getHabitList = () => {
    const data = readData();
    const { habits } = data;

    Object.keys(habits).forEach((habit) => {
      habits[habit].isEdit = false;

      const sortedDates = Object.keys(habits[habit].dates)
        .filter((dateString) => habits[habit].dates[dateString] === true)
        .map((dateString) => new Date(dateString))
        .sort((a, b) => new Date(a) - new Date(b));

      habits[habit].sortedDates = sortedDates;
    });

    return habits;
  };

  const addHabit = (habitName, type) => {
    const existingData = readData();
    const { id } = existingData;
    existingData.id = id + 1;

    existingData.habits[id] = {
      name: habitName,
      type,
      isStopped: false,
      dates: {}
    };

    localStorage.setItem('appData', JSON.stringify(existingData));
  };

  const editHabitWithID = (habitName, habitType, habitID) => {
    const existingData = readData();
    existingData.habits[habitID].name = habitName;
    existingData.habits[habitID].type = habitType;

    localStorage.setItem('appData', JSON.stringify(existingData));
  };

  const deleteHabitWithID = (habitID) => {
    const existingData = readData();
    delete existingData.habits[habitID];

    localStorage.setItem('appData', JSON.stringify(existingData));
  };

  const stopHabitWithID = (habitID) => {
    const existingData = readData();
    existingData.habits[habitID].isStopped = true;

    localStorage.setItem('appData', JSON.stringify(existingData));
  };

  return {
    getHabitList,
    addHabit,
    editHabitWithID,
    deleteHabitWithID,
    stopHabitWithID
  };
};

export default localStorageUtils;
