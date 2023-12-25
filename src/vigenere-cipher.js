const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  changeMessage(message, key, encrypt) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];

      if (this.alphabet.includes(char)) {
          let mCharCode = message.charCodeAt(i);
          let keyCharCode = key.charCodeAt(j % key.length);
  
          let changeCharCode;
          if (encrypt) {
            changeCharCode = (mCharCode + keyCharCode) % 26;
          } else {
            changeCharCode = (mCharCode + 26 - keyCharCode) % 26;
          }
          result += String.fromCharCode(changeCharCode + 65);
          j++;
      } else {
          result += char;
      }
    }

    if (this.direct){
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }

  encrypt(message, key) {
    return this.changeMessage(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.changeMessage(encryptedMessage, key, false);
  }

}

module.exports = {
  VigenereCipheringMachine
};
