function myFunction() {
    let a = 1;

    if (true) {
        console.log(a); // Cannot access 'a' before initialization... 
        // let a = 2;
        console.log(a);
    }
}

myFunction();