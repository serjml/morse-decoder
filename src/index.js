const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
  };
  
  function decode(str) {
  let arr = [];
  let arr2 = [];
  
  for (let i = 0; i < str.length; i += 10) {
   arr.push(str.substring(i, i+10))
  }
  
  arr.map((el) => {
  let sl = el.length;
  let sym = '';
  while(sl) {
  if (el == '**********') sym = ' ';
  if (el.endsWith('10')) sym = '.' + sym;
  if (el.endsWith('11')) sym = '-' + sym;  
  el = el.slice(0, sl - 2)
  sl = sl - 2;  
  } arr2.push(sym)
  })
  
  let arr3 = arr2.map((el) => MORSE_TABLE[el]).join('');
  return arr3;
  }
  
  module.exports = {
    decode
  }