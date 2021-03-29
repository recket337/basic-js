const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str === undefined ? str = '' : str = String( str );
  if ( !options.separator ) options.separator = '+';
  if ( !options.repeatTimes ) options.repeatTimes = 1;
  options.addition === undefined ? options.addition = '' : options.addition = String( options.addition );
  if ( !options.additionRepeatTimes ) options.additionRepeatTimes = 1;
  if ( !options.additionSeparator ) options.additionSeparator = '|';

  let res = [ ...Array.from( { length : options.repeatTimes } )]
    .map( (i) => i = str);

  let addition = [ ...Array.from( { length : options.additionRepeatTimes } )]
    .map( (i) => i = options.addition )
    .join( options.additionSeparator );
  
  return res.map( (i) => i += addition ).join( options.separator );
};
  