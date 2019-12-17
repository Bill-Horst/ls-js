// 3
let myArray = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// 4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let strArr = Object.keys(obj).map(el => el.toUpperCase());
console.log(strArr);

// 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let newObj = Object.create(myProtoObj);
console.log(newObj.foo)

// 6
newObj.qux = 3;
// for ... in iterates over object's own keys PLUS the keys of its prototype
// Object.keys(<obj>).forEach iterates over only the object's own keys

// 7
let objToCopy = {
  foo: 1,
  bar: 2,
};

const copyObj = (obj, keys) => {
  if (!keys) {
    return Object.assign({}, obj);
  } else {
    let returnObj = {}; // create a new object
    keys.forEach(k => { // iterate over keys sent in
      returnObj[k] = obj[k]; // assign passed obj's key to returnObj
    });
    return returnObj;
  }
}

let newObj1 = copyObj(objToCopy);
console.log(newObj1.foo);    // => 1
console.log(newObj1.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined