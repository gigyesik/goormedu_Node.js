// string
var str1 = 'hello';
var str2 = 'world';
var str3 = null;

str3 = str1 + " "; // 'hello '
console.log(str3);

str3 = str3 + str2; // 'hello world'
console.log(str3);

// assignment
var a = 1, b = 2, c = 3, d = 4;

a += 1; // 2
b -= 1; // 1
c *= 2; // 6
d /= 2; // 2
console.log(a, b, c, d)

// comparison
var a = 2, b = 1, c = 6, d = 8;
console.log(a > b); // true
console.log(b >= c); // false
console.log(c <= 18); // true
console.log(d < 18); // true

// logical
var a = 2, b = 1, c = 6;
console.log(a == 1); // false
console.log(b != c); // true
console.log(true && false) // false (and)
console.log(false || true) // true (or)
console.log(!false) // true

// conditional
var a = 2, b = 1;
(a > b)? (console.log('a > b')) : (console.log('a < b')); // a > b