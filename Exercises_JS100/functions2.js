// function greet(greeting = 'Hello') {
//     console.log(greeting + ', world!');
// }
// greet('Salutations');
// greet();

// function greet(greeting = 'Hello', place = 'world') {
//     console.log(`${greeting}, ${place}`);
// }
// greet('Salutations');
// greet();
// greet('Good morning', 'Launch School');

// function greeting() {
//     return 'Good morning';
// }
// function recipient() {
//     return 'Launch School';
// }
// function greet() {
//     console.log(`${greeting()}, ${recipient()}`);
// }
// greet();

// function sum(...arguments) {
//     // values = Array.prototype.slice.call(arguments);

//     // return values.reduce(function (a, b) {
//     //     return a + b;
//     // });
//     let retVal = 0;
//     arguments.forEach(a => {
//         retVal += a;
//     });
//     return retVal;
// }
// console.log(sum(1, 4, 5, 6));
// console.log(sum(1, 4, 5, 6, 6, 5, 4, 1));

// function formatName(args) {
//     return `${args[0]} ${args[1][0]} ${args[2]}`;
// }
// fullName = ['James', 'Tiberius', 'Kirk'];
// console.log(formatName(fullName));

// const calculateBMI = (h, w) => (w / ((h / 100) ** 2)).toFixed(2);
// console.log(calculateBMI(180, 80));
// console.log(calculateBMI(183, 85));

// const catAge = age => {
//     if (age === 1) return 15;
//     if (age === 2) return 24;
//     return (age - 2) * 4 + 24;
// }
// console.log(catAge(1));
// console.log(catAge(2));
// console.log(catAge(3));
// console.log(catAge(4));

// const removeLastChar = str => str.substring(0, str.length - 1);
// console.log(removeLastChar('ciao!'));
// console.log(removeLastChar('hello'));

// const template = 'I VERB NOUN.';
// const sentence = (verb, noun) => {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }
// console.log(sentence('like', 'birds'));

// let initGame = () => {
//     return {
//         level: 1,
//         score: 0
//     }
// };
// OR
let initGame = () => ({
    level: 1,
    score: 0
});
let game = initGame();
console.log('Level: ' + game.level);
console.log('Score: ' + game.score);