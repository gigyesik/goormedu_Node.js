/*
// example
var num = 1; // global

function foo() {
    var num = 2; // local

    function bar() { // closure function
        console.log(num); // 2
    }
    return bar;
}

var baz = foo();
baz(); // 2
*/

/*
function f(arg) { // first. 
    var n = function() { // second
        return arg; // return it!
    }
    arg++;
    return n;
}

var m = f(123);
console.log(m()); // 124
*/

/*
// example 2
function f() {
    var a = [];
    var i;

    for(i = 0; i < 3; i++){ 
        a[i] = function() { // third. a[0], a[1], a[2] (closure function)
            return i // 3
        }
    } // second. i is already 3
    return a; // first
}

var b = f();
console.log(b[0]()); // 3
console.log(b[1]()); // 3
console.log(b[2]()); // 3
console.log(b); // [Function(anonymous) * 3]
*/

// example 3
function f() {
    var a = [];
    var i;

    for(i = 0; i < 3; i++){ 
        a[i] = function(x) {
            return function() { // third
                return x;
            }
        }(i); // second. i = 0 , 1, 2
    }
    return a; // first
}

var b = f();
console.log(b[0]()); // 0
console.log(b[1]()); // 1
console.log(b[2]()); // 2