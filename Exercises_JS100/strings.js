// console.log('These aren\'t the droids you\'re looking for.'.length)

// console.log('confetti floating everywhere'.toUpperCase());

// const repeat = (num, phrase) => {
//     let repeatedPhrase = '';
//     for (let i = 0; i < num; i++) {
//         repeatedPhrase += phrase;
//     }
//     console.log(repeatedPhrase);
// }
// repeat(3, 'ha');
// repeat(144, 'deVElopers,')

// console.log(`A pirate I was meant to be!
// Trim the sails and roam the sea!`);
// // OR ...
// console.log('A pirate I was meant to be!\nTrim the sails and roam the sea!');

// const compareStrs = (s1, s2) => s1.toLowerCase() === s2.toLowerCase();
// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';
// console.log(compareStrs(string1, string2));
// console.log(compareStrs(string2, string3));
// console.log(compareStrs(string1, string3));

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// console.log(/x/.test(byteSequence));
// console.log(/xq/.test(byteSequence));
// console.log(/xs/.test(byteSequence));

// const isBlank = str => str === '';
// console.log(isBlank('mars'));
// console.log(isBlank('  '));
// console.log(isBlank(''));

// const isBlank = str => str.trim() === '';
// console.log(isBlank('mars'));
// console.log(isBlank('  '));
// console.log(isBlank(''));

const capSen = str => str.split(' ').map(w => w.charAt(0).toUpperCase() + w.substring(1)).join(' '); // hard to read, probably should split out in real life
console.log(capSen('launch school tech & talk'));
