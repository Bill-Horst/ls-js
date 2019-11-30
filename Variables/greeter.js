const name = 'Victor';

// console.log(`Good morning, ${name}`);
// console.log(`Good afternoon, ${name}`);
// console.log(`Good evening, ${name}`);

const periods = ['morning', 'afternoon', 'evening'];

periods.forEach(period => {
    console.log(`Good ${period}, ${name}`);
});