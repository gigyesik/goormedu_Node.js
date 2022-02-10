var EventEmitter = require('events').EventEmitter;
var evt = new EventEmitter();

evt.on('helloNode', function(str) {
    console.log('Hello! ' + str);
}); // event

setTimeout(function() {
    evt.emit('helloNode', 'Node.js');
}, 3000); 