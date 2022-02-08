// dynamic cast
var i = 1; // number
var ch = "a"; // string
console.log(i + ch); // 1ch (casting string)
ch = 1;
console.log(i + ch); // 2 (number)

// prototypal object-oriented
var person = {name : 'David Ki', age : 24}; // object
console.log(person); // on debug console (web brower)

person.height = 187; 
console.log(person); // new object

// evalute code block
eval('var a = 1, b = 2;');
console.log(a, b); // 1 2 (run in demo only)

// higher-order functions
var ho_func = function(param_func){ param_func(); };
ho_func(function() {console.log('hello'); }); // hello
