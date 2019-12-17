console.log(/o/.test('bobcat'));

// No match
console.log("bobcat".match(/x/));

// Global match
console.log("bobcat".match(/[bct]/g));
console.log("bobcat".match(/[bct]/));

// Singular match with groups
console.log("bobcat".match(/b((o)b)/));

const list1 = [1, 6, 3, 2];
const list2 = [-1, -6, -3, -2];
const list3 = [2, 2];
console.log(Math.max(...list1));
console.log(Math.max(...list2));
console.log(Math.max(...list3));

let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
];

const logMatch = (words, regex) => {
    const retArr = [];
    words.forEach(w => {
        if (w.match(regex)) retArr.push(w);
    });
    return retArr;
}

console.log(logMatch(words, /lab/));
console.log(logMatch(words, /ri/));
console.log(logMatch(words, /ra/));