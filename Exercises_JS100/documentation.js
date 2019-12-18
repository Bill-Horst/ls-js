// accessing undefined element of an array
console.log([1,2,3][10]); // undefined

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log(3*4/6);
console.log(6/3*4);

console.log(Date.now());

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}