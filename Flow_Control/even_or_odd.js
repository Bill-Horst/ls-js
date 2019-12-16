// const evenOrOdd = num => num % 2 === 0 ? 'even' : 'odd';
const evenOrOdd = num => {
    if (typeof num !== 'number') {
        console.log('not a number');
        return;
    } else {
        return num % 2 === 0 ? 'even' : 'odd';
    }
}

console.log(evenOrOdd(1));
console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(0));
console.log(evenOrOdd('0'));