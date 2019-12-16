const caps_ten_plus = str => str.length > 10 ? str.toUpperCase() : str;

console.log(caps_ten_plus('hello world'));
console.log(caps_ten_plus('goodbye'));

console.log(caps_ten_plus("Sue Smith"));     // 'Sue Smith'
console.log(caps_ten_plus("Sue Robertson")); // 'SUE ROBERTSON'
console.log(caps_ten_plus("Joe Thomas"));    // 'Joe Thomas'
console.log(caps_ten_plus("Joe Stevens"));   // 'JOE STEVENS'