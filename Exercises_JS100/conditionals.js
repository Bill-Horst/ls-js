// 0, null, undefined, [], false, NaN, ''



// let randomNumber = Math.round(Math.random());
// if (randomNumber === 1) {
//     console.log('yes');
// } else {
//     console.log('no');
// }



// let randomNumber = Math.round(Math.random());
// console.log(randomNumber === 1 ? 'yes' : 'no');



// const weather = 'sunny';
// if (weather === 'sunny') {
//     console.log('It\'s a beautiful day');
// } else if (weather === 'rainy') {
//     console.log('Grab your umbrella');
// } else {
//     console.log('Let\'s stay inside');
// }



const weather = 'sunny';
switch (weather) {
    case 'sunny':
        console.log('It\'s a beautiful day');
        break;
    case 'rainy':
        console.log('Grab your umbrella');
        break;
    case 'snowy':
        console.log('Let\'s sled');
        break;
    default:
        console.log('Let\'s stay inside');
}