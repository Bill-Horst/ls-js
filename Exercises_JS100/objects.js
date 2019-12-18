// let student = {
//     name: 'Carmen',
//     age: 14,
//     grade: 10,
//     courses: ['biology', 'algebra', 'composition', 'ceramics'],
//     gpa: 3.75,
// };
// console.log(student.courses);

// let jane = {
//     firstName: 'Jane',
//     lastName: 'Harrelson',
//     age: 32,
//     location: {
//         country: 'Denmark',
//         city: 'Aarhus'
//     },
//     occupation: 'engineer',
// }
// console.log(jane.location.country);

// let fido = {
//     name: 'Fido',
//     species: 'Labrador Retriever',
//     color: 'brown',
//     weight: 16,
// };
// fido.age = 3;
// fido.favoriteFood = 'scrambled snake';
// console.log(fido);

// let jane = {
//     firstName: 'Jane',
//     lastName: 'Harrelson',
//     age: 32,
//     location: {
//         country: 'Denmark',
//         city: 'Aarhus'
//     },
//     occupation: 'engineer',
//     greet: function(name) {console.log(`Hej, ${name}`)}
// };
// jane.greet('Bobby');

// let obj = {
//     num: 42,
//     'property name': 'string value',
//     true: false,
//     fun: function () {
//         console.log('Harr Harr!');
//     },
// }
// for (prop in obj) {
//     console.log(prop)
//     if (prop === true) {
//         console.log("It's true!");
//     }
// }

// let vehicle = {
//     manufacturer: 'Tesla',
//     model: 'Model X',
//     year: 2015,
//     range: 295,
//     seats: 7
// };
// const keys = Object.keys(vehicle);
// console.log(keys);

// let person = {
//     title: 'Duke',
//     name: 'Nukem',
//     age: 33
// }
// const nestedPerson = [];
// for (let prop in person) {
//     nestedPerson.push([prop, person[prop]]);
// }
// console.log(nestedPerson);

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
// let person = {};
// nestedArray.forEach(prop => {
//     person[prop[0]] = prop[1];
// });
// console.log(person);

function clone(obj) {
    const stringPerson = JSON.stringify(obj);
    return JSON.parse(stringPerson);
}
let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
}
clonedPerson = clone(person);
person.age = 34;
console.log(person.age);
console.log(clonedPerson.age);
// OR
// function clone(obj) {
//     return Object.assign({}, obj); // assign all properties of obj (second argument) to new object (first argument)
// }

// shallow copy copies references so any property that references an object will exist on the new object as a reference to the same object
// deep copy creates new objects so properties that are references on the new object won't point to the same object that the property on the original object points to