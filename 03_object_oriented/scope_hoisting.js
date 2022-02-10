/*
// scope
function foo() {
    if (true) {
        var a = 0; // local , block level scope
        console.log(a);
    }
    console.log(a); // function level scope
}
console.log(foo()); // 0, 0, undefined
*/

/*
// global, local
var global_scope = 'global'; // global scope
var local_function = function() {
    var local_scope = 'groom'; // local scope
    console.log(global_scope); // global
    console.log(local_scope); // local
};
console.log(local_scope); // Error
*/

/*
// scope chain
var a = 1; // global

function outer() {
    var b = 2; // local
    console.log(a); // 1

    function inner() {
        var c = 3; // local
        console.log(b); // 2
        console.log(a); // 1
    }
    inner(); // 2 1
}
outer(); // 1 2 1
console.log(c) // Error (c is not defined)
*/

/*
// lexical scope
var text = 'global'; // global

function foo() {
    console.log(text);
}
function bar() {
    var text = 'bar'; // local. if test = 'bar'; -> global
    foo();
}

bar(); // 'global'
*/

// hoisting
function foo() {
    // var a; 
    console.log(a); // undefined
    var a = 100;
    console.log(a); // 100
}

foo();

