const age = 20;
const ages = [10, 20, 30, 40];

console.log(`You are ${age} years old.`);

ages.forEach(counter => {
    console.log(`In ${counter}, you will be ${age + counter} years old`);
});