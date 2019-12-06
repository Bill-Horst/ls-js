const rlSync = require('readline-sync');

const age = Number(rlSync.question('How old are you?'));
const ages = [10, 20, 30, 40];

console.log(`You are ${age} years old.`);

ages.forEach(counter => {
    console.log(`In ${counter} years, you will be ${age + counter} years old`);
});