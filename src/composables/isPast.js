const isPast = (date) => {
  const currentDate = new Date();
  const storedDate = new Date(date);

  return storedDate <= currentDate;
};

export default isPast;
