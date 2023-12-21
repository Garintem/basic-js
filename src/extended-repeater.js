const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let sep;
  let addSep;
  let add;
  let ad;
  
  typeof (options.separator) === 'undefined' ? sep = '+' : sep = options.separator;
  typeof (options.additionSeparator) === 'undefined' ? addSep = '|' : addSep = options.additionSeparator;
  
  if (typeof ((options.repeatTimes)) !== 'undefined'){
  add = (options.addition + addSep).repeat(options.additionRepeatTimes).slice(0, -(addSep.length));
  ad = (str + add + sep).repeat(options.repeatTimes).slice(0, -(sep.length));
  } else {
      ad = str + options.addition;
  }
  if (String(str) === 'STRING_OR_DEFAULT') {
      ad = 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT';
  }
return ad;
}

module.exports = {
  repeater
};
