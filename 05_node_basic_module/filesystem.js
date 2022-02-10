// from text.txt
var fs = require('fs');

/*
// asynchronous read
fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log('aysnc ' + data);
});

// synchronous read
var text = fs.readFileSync('text.txt', 'utf8');
console.log('sync ' + text);
// sync text print -> it print first!
// aysnc text print
*/

/*
// writefile
var data = 'fs.writeFile test'

fs.writeFile('text.txt', data, 'utf8', function(err) {
    console.log('async finish');
});
fs.writeFileSync('text.txt', data, 'utf8');
console.log('sync finish') // it write first!
*/

// exception
try { // synchronous
    var data = fs.readFileSync('notexist.txt', 'utf8'); // not exist file read
    console.log(data)
} catch (err) {
    console.log(err);
} // catch statement

fs.readFile('notexist.txt', 'utf8', function(err, data) { // not exist file read
    if (err) {
        console.log(err); // fail to read
    } else {
        console.log(data); // success to read
    }
}); // if statement