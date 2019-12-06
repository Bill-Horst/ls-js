const rlSync = require('readline-sync');

const firstName = rlSync.question('What is your first name?\n');
const lastName = rlSync.question('What is your last name?\n');

console.log(`Hello, ${firstName} ${lastName}!`);