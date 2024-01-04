import readData from '../../composables/readDataFromLocalStorage';

const localStorageUtils = () => {
  const isPast = (date) => {
    const currentDate = new Date();
    const storedDate = new Date(date);

    return storedDate <= currentDate;
  };

  const addDate = (date) => {
    if (!isPast(date)) {
      return {};
    }

    const existingData = readData();

    const { habits } = existingData;

    Object.entries(habits).forEach(([key, value]) => {
      if (!habits[key].isStopped && !(date in value.dates)) {
        existingData.habits[key].dates[date] = false;
      }
    });

    localStorage.setItem('appData', JSON.stringify(existingData));

    return existingData;
  };

  const getHabitList = () => {
    const data = readData();
    return data.habits;
  };

  const editHabitForDate = (date, habitID) => {
    const data = readData();

    data.habits[habitID].dates[date] = !data.habits[habitID].dates[date];
    localStorage.setItem('appData', JSON.stringify(data));
  };

  return { getHabitList, addDate, editHabitForDate };
};

export default localStorageUtils;
