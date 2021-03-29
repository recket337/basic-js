const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((acc, item) => acc += item.filter((item2) => item2 === '^^').length, 0);
};