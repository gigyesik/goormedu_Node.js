// number
var int_data = 1;
var float_data1 = Number('1.0');
var float_data2 = new Number('4.1254');
console.log(typeof int_data); // number
console.log(typeof float_data1); // number
console.log(typeof float_data2); // object

console.log((255).toString(10)); // 255
console.log((255).toString(16)); // ff
console.log((255).toString(8)); // 377
console.log((255).toString(2)); // 11111111

// string
var character1 = 'a';
var character2 = 'b';
var string1 = 'double quotations';
var string2 = 'single quotation anyway';
var string3 = new String('string object');
console.log(typeof string1); // string
console.log(typeof string3); // object
console.log(string2[5]); // e
console.log(string2.charAt(5)); // e
console.log(string1.length); // 17
console.log(string1.toUpperCase()); // DOUBLE QUOTATIONS
console.log(string3.indexOf('g')); // 5
console.log(string3.indexOf('x')); // -1

// boolean
var result1 = new Boolean();
var result2 = true;
console.log(typeof result1); // object
console.log(typeof result1.valueOf()); // boolean
console.log(Boolean('test')); // true
console.log(Boolean('')); // false
console.log(Boolean({})); // true

// array
var array1 = [1, 2, 3];
var array2 = new Array(1, 2);
array2.push(3);
var array3 = new Array(3);
console.log(array3); // [undefined * 3]

console.log(typeof array1); // object
console.log(array1.toString()); // 1, 2, 3
console.log(array1.valueOf()); // [1, 2, 3]
console.log(array1.length) // 3
console.log(array1[1]) // 2

array1.length = 5;
console.log(array1); // [1, 2, 3, undefined * 2]
console.log(array2.push('new1'));
console.log(array2); // [1, 2, 3, 'new1']

array2.pop();
console.log(array2); // [1, 2, 3]

array3 = new Array(4, 2, 1, 3, 0);
console.log(array3.sort()); // [0, 1, 2, 3, 4]