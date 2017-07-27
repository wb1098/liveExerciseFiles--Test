// test implemention page
// 7.25.17

// Object stuff
//==========================================

//============. Object.assign() ================
//Object.assign(target, ...sources)
var obj = { a: 1 , b : 20};
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

// merging objects
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.


// Merging objects with same properties
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
