const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if ( Array.isArray(members) === false) return false;

  return members
    .filter((item) => typeof(item) === 'string')
    .map((item) => item.trim().toLowerCase()).sort()
    .reduce((acc, item) => acc += item[0].toUpperCase(), '');
};
