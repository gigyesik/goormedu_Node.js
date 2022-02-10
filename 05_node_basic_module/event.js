// event object (module)
var EventEmitter = require('events');

var costom_event = new EventEmitter();

costom_event.on('call', function() {
    console.log('event call');
});

// costom_event.removeAllListeners() // nothing happen
costom_event.emit('call'); // event call