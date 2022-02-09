// function
function sum(a, b) {
    var c = a + b;
    return c
}

console.log(sum(1, 2)); // 3

// function is data
var add = sum;
console.log(typeof add); // function
console.log(add(1, 2));  // 3

// delete
var student = {name : 'groom', age : '20'}
console.log(student.name); // groom

delete student.name; // true
console.log(student.name); // undefined
delete student; // false
delete not_exist; // true
console.log(student); // {age : 20}

// anonymous function
var f = function (a) {
    return 'This is anonymous function.';
}

console.log(f()); // This is anonymous function (only once use, or callback)

// callback
function one() {
    return 1;
}

var two = function() {
    return 2;
}
function invoke_and_add(a, b) {
    return a() + b();
}
console.log(invoke_and_add(one, two)); // 3

invoke_and_add(one, function() { // anonymous function
    return 2;
}) // 2