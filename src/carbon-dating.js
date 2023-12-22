const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  let samp = typeof sampleActivity === 'string' ? Number(sampleActivity) : false;
let result;

if (typeof samp === 'number' && Number.isNaN(samp) !== true && samp > 0 && samp < 15){
   result = Math.ceil(Math.log (MODERN_ACTIVITY / samp) / k);
} else {
    result = false;
}
 return result;
}

module.exports = {
  dateSample
};
