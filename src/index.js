const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.match(/.{10}/g).map(item => item.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-'));
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '**********') res.push(' ');
        for (let j = 0; j < Object.keys(MORSE_TABLE).length; j++) {
            if (arr[i] === Object.keys(MORSE_TABLE)[j]) {
                res.push(Object.values(MORSE_TABLE)[j]);
            }
        }
    }
    return res.join('');
};


module.exports = {
    decode
}