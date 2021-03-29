const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  const m = Date.prototype.getMonth.call(date);
  // const m = date.getMonth();
  let rez = '';
  m === 11 || m === 0 || m === 1 ? rez = 'winter' :  m === 2 || m === 3 || m === 4 ? 
  rez = 'spring' :  m === 5 || m === 6 || m === 7 ? rez = 'summer' : m === 8 || m === 9 || m === 10 ?
  rez = 'autumn' : rez = 'Unable to determine the time of year!';
  return rez;
};
