module.exports = (_newDate) => {
  const timeUnix = Date.parse(_newDate) - Date.parse(new Date());
  const timeDays = timeUnix / (1000 * 60 * 60 * 24);
  return Math.floor(timeDays) + 1;
};
