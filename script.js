// test implemention page
// 7.25.17

// array stuff
//==========================================


// ============ array.includes ============
//arr.includes(searchElement)
//arr.includes(searchElement, fromIndex)
var a = [1, 2, 3];
a.includes(2); // true
a.includes(4); // false

[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true ** A negative value searches from the index of array.length + fromIndex by asc.
[1, 2, NaN].includes(NaN); // true


//============== array.find() ===================
//arr.find(callback[, thisArg])
function isBigEnough(element) {
  return element >= 15;  // returning first value greater that 15
}

[12, 5, 8, 130, 44].find(isBigEnough/* calback function*/); // 130

// Find an object in an array by one of its properties
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries));
// { name: 'cherries', quantity: 5 }

// Find a prime number in an array
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5






//============ array.concat() ==================

var arr1 = [1,2,3,4];
var arr2 = [2,5,7];
var workArr = [];
workArr = arr1.concat(arr2); // [1,2,3,4,2,5,7]

console.log(workArr);


// array.indexOf()
var a = [2,6,9,6];
var f = a.indexOf(9);  // 2

console.log(f);

//array.slice()

var arr = ['zero', 'one', 'two', 'three'];
var sliced = arr.slice(1,3);
var sliced1 = a.slice(1,3);
console.log('This is one of the slices ['+sliced + '] and it can slice one from above [' +sliced1+ ']');


// array.sort()
//arr.sort()
//arr.sort(compareFunction)

var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']



var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Sorted:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Sorted without a compare function:', numberArray.sort());
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Sorted without a compare function:', numericStringArray.sort());
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Sorted without a compare function:', mixedNumericArray.sort());
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));


// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});


//=========== array.filter() ================================
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var longWords = words.filter(function(word){
  return word.length > 6;
});


console.log(longWords);
// Filtered array longWords is ["exuberant", "destruction", "present"]


var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
console.log(filterItems('ang')); // ['mango', 'orange']


//============= array.reduce() =======================
var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 0);
// total is 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]

var sum = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);
// sum is 6

//counting instances of values in an object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
    return allNames;
}, {});

console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }



//============= array.join() =================
//arr.join()
//arr.join(separator)

var a = ['Wind', 'Rain', 'Fire'];
a.join();    // 'Wind,Rain,Fire'
a.join('-'); // 'Wind-Rain-Fire'
a.join(', ');  // 'Wind, Rain, Fire'
console.log(a.join(' + ')); // 'Wind + Rain + Fire'

a.join('');    // 'WindRainFire'


//============== array.map() =========================
/*var new_array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])
*/


var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
console.log(doubles);
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


// ** Mapping an array of number yo an array of square roots
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
console.log(numbers + ' and ' + roots);
// numbers is still [1, 4, 9]

//Using map to reformat objects in an array
var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(function(obj) {
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
console.log(JSON.stringify(reformattedArray));


//Mapping an array of numbers using a function containing an argument
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

// doubles is now [2, 8, 18]
// numbers is still [1, 4, 9]
console.log(numbers + ' became ' + doubles);

// Using map to reverse a string
var str = '12345';
var output = Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join('');

// Output: '54321'
// Bonus: use '===' to test if original string was a palindrome
console.log(str + ' became ' + output);








