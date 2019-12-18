// const sum = (a, b) => a + b;
// console.log(sum(22, 10));

// const brendanEichQuote = () => console.log('Always bet on JavaScript.');
// brendanEichQuote(); // return value is undefined

// const cite = (person, quote) => console.log(`${person} said: "${quote}"`);
// cite('Brendan Eich', 'Always bet on JavaScript');
// cite('Trump', 'Grab them by the horns!');

// const squaredNumber = n => n * n;
// console.log(squaredNumber(3));
// console.log(squaredNumber(11));

// const compareByLength = (a, b) => {
//     // return a.length === b.length ? 0 : a.length < b.length ? -1 : 1; // hard to read, break it up a bit...
//     if (a.length === b.length) return 0;
//     return a.length < b.length ? -1 : 1;
// }
// console.log(compareByLength('patience', 'perseverance'));
// console.log(compareByLength('strength', 'dignity'));
// console.log(compareByLength('humor', 'grace'));

// console.log('Captain Ruby'.slice(0, 8).concat('JavaScript'));

// const greet = (code) => {
//     switch (code) {
//         case 'en':
//             return 'Hi';
//         case 'fr':
//             return 'Salut';
//         case 'pt':
//             return 'Ola';
//         case 'de':
//             return 'Hallo';
//         case 'sv':
//             return 'Hej';
//         case 'af':
//             return 'Haai';
//     }
// }
// console.log(greet('en')); // 'Hi!'
// console.log(greet('fr')); // 'Salut!'
// console.log(greet('pt')); // 'Olá!'
// console.log(greet('de')); // 'Hallo!'
// console.log(greet('sv')); // 'Hej!'
// console.log(greet('af')); // 'Haai!'

// const extractLanguage = loc => {
//     return loc.slice(0, 2);
// }
// console.log(extractLanguage('en_US.UTF-8'));
// console.log(extractLanguage('en_GB.UTF-8'));
// console.log(extractLanguage('ko_KR.UTF-16'));

// const extractRegion = loc => {
//     return loc.slice(3, 5);
// }
// console.log(extractRegion('en_US.UTF-8'));
// console.log(extractRegion('en_GB.UTF-8'));
// console.log(extractRegion('ko_KR.UTF-16'));

// const nonEnglishGreet = code => {
//     switch (code) {
//         case 'fr':
//             return 'Salut';
//         case 'pt':
//             return 'Ola';
//         case 'de':
//             return 'Hallo';
//         case 'sv':
//             return 'Hej';
//         case 'af':
//             return 'Haai';
//     }
// }

// const englishGreet = code => {
//     switch (code) {
//         case 'US':
//             return 'Hey';
//         case 'GB':
//             return 'Hello';
//         case 'AU':
//             return 'Howdy';
//     }
// }

// const extractLanguage = loc => {
//     return loc.slice(0, 2);
// }

// const extractRegion = loc => {
//     return loc.slice(3, 5);
// }

// const localGreet = locale => {
//     const language = extractLanguage(locale);
//     const country = extractRegion(locale);
//     if (language === 'en') {
//         return englishGreet(country);
//     } else {
//         return nonEnglishGreet(language);
//     }
// }
// console.log(localGreet('en_US.UTF-8'));
// console.log(localGreet('en_GB.UTF-8'));
// console.log(localGreet('en_AU.UTF-8'));
// console.log(localGreet('fr_FR.UTF-8'));
// console.log(localGreet('fr_CA.UTF-8'));
// console.log(localGreet('fr_MA.UTF-8'));
