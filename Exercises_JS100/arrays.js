// const first = arr => arr[0];
// console.log(first(['Earth', 'Moon', 'Mars']));
// console.log(first([]));

// const last = arr => arr[arr.length - 1];
// console.log(last(['Earth', 'Moon', 'Mars']));

// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// energy.shift();
// energy.push('geothermal');
// console.log(energy);

// let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// console.log(alphabet);

// let scores = [96, 47, 113, 89, 100, 102];
// const count = scores.filter(score => score >= 100).length;
// console.log(count);

// let vocabulary = [
//     ['happy', 'cheerful', 'merry', 'glad'],
//     ['tired', 'sleepy', 'fatigued', 'drained'],
//     ['excited', 'eager', 'enthused', 'animated']
// ];
// vocabulary.forEach(sub => sub.forEach(word => console.log(word)));

// function filter(input) {
//     if (Array.isArray(input)) {
//         console.log('it\'s an array');
//     } else {
//         console.log('it\s not an array');
//     }
// }
// filter('sup');
// filter(true);
// filter(['s', true, 3]);

// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome', 'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro', 'Marrakesh', 'New York City'];
// const contains = (place, destinations) => {
//     for (let i = 0; i < destinations.length; i++) {
//         if (destinations[i] === place) {
//             return true;
//         }
//     }
// }
// console.log(contains('Barcelona', destinations));
// console.log(contains('Nashville', destinations));
// console.log(contains('London', destinations));
// console.log(contains('Landy', destinations));

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// console.log(passcode.join('-'));

// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
// gLength = groceryList.length;
// for (let i = 0; i < gLength; i++) {
//     console.log(groceryList.shift());
//     // console.log(groceryList.pop());
// }
// console.log(groceryList);