// RECURSION:
const factorial = n => {
    return n >= 1 ? n * factorial(n - 1) : 1;
    // if number is greater than or equal to 1,
    // return the number times the result of factorial with an argument of 1 less than the number
    // baseline condition is 1... so when n gets down to 1, factorial returns 1 and the results percolate up like 1 * 2 * 3 * 4 ... until hitting the original number input
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));

// LOOP:
const factorial2 = n => {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans;
}

console.log(factorial2(0));
console.log(factorial2(1));
console.log(factorial2(2));
console.log(factorial2(3));
console.log(factorial2(4));
console.log(factorial2(5));
console.log(factorial2(6));
console.log(factorial2(7));
console.log(factorial2(8));