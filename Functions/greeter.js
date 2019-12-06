const rlSync = require('readline-sync');

const askName = q => rlSync.question(q);

console.log(`Hello, ${askName('What\'s your first name?\n')} ${askName('What\'s your last name?\n')}`);