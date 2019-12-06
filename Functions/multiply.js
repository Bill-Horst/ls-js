const rlSync = require('readline-sync');

const multiply = (a, b) => a * b;

const a = rlSync.question('First number?\n');
const b = rlSync.question('Second number?\n');

console.log(`${a} * ${b} = ${multiply(a, b)}`);