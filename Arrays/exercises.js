const arr = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
const nestedArr = [ [1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0], ];

nestedArr.forEach(el => {
    el.forEach(nestedEl => {
        if (nestedEl % 2 === 0) console.log(nestedEl);
    });
});

const newArr = arr.map(el => el % 2 === 0 ? 'even' : 'odd');
console.log(newArr);

const mixedArray = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
const removeNonInteger = a => a.filter(el => Number.isInteger(el));
const intArray = removeNonInteger(mixedArray);
console.log(intArray);

let stringArr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
const oddLengths = a => {
    const newA = a.map(el => el.length);
    return newA.filter(el => el % 2 !== 0);
};
console.log(oddLengths(stringArr));

const numbers1 = [1, 3, 5, 7, 9, 11];
const numbers2 = [];
const numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

const memArr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
console.log(memArr[1][2]);