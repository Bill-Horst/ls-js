console.log(false || (true && false)); // false - first operand is false - short circuit so false
console.log(true || (1 + 2)); // true - first operand is true - short circuit so true
console.log((1 + 2) || true); // 3 - first operand evaluates to 3 (truthy) and short circuit so never makes it to 'true'
console.log(true && (1 + 2)); // 3 - second operand evaluates to 3 (truthy)
console.log(false && (1 + 2)); // false - false is false and short circuit so false
console.log((1 + 2) && true); // true - 3 is truthy so goes to next operand, which is true, so true
console.log((32 * 4) >= 129); // false - 128 is less than 129
console.log(false !== !true); // false - false !== false -> false === true -> so false
console.log(true === 4); // false - operands of different types?
console.log(false === (847 === '847')); // true - 847 doesn't triple equal '847' so false... false === false? true
console.log(false === (847 == '847')); // false - 847 does double equal '847' so true... false === true? false
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);
// left side - 100 / 5 is truthy... !truthy is false... false === 20? false.. false or false? = false
// middle - 328 / 4 equals 82, so true
// right - false
/// so false || true || false equals true
// or simply - one of the || operands is true, so it's true