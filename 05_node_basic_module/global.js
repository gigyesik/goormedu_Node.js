// console object (module)
// console.log
console.log('%d + %d = %d', 1, 2, 1 + 2); // 1 + 2 =3
console.log('%d + %d = %d', 1, 2, 1+2, 4); // 1 + 2 = 3 4
console.log('%d + %d = %d', 1, 2); // 1 + 2 = %d

// console.time
console.time('time');
console.timeEnd('time'); // 0.098s (time ~ time)

// process object (module)
console.log('prcess env property : ', process.env); // process invironment
console.log('uptime method : ', process.uptime()); // running time this program

// exports object (module)
// from test.js
var calculator = require('./test.js');
console.log(calculator.double(3)); // 9
console.log(calculator.plus(3)); // 6