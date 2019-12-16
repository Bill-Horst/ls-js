const numberBoundary = n => {
    if (n < 0) {
        console.log(`${n} is less than 0`);
    } else if (n >= 0 && n <=50) {
        console.log(`${n} is between 0 and 50`);
    } else if (n >= 51 && n <=100) {
        console.log(`${n} is between 51 and 100`);
    } else {
        console.log(`${n} is greater than 100`);
    }
}

numberBoundary(-1);
numberBoundary(1);
numberBoundary(52);
numberBoundary(102);

numberBoundary(0);
numberBoundary(50);
numberBoundary(51);
numberBoundary(100);
numberBoundary(101);

numberBoundary(25);   // '25 is between 0 and 50'
numberBoundary(75);   // '75 is between 51 and 100'
numberBoundary(125);  // '125 is greater than 100'
numberBoundary(-25);  // '-25 is less than 0'