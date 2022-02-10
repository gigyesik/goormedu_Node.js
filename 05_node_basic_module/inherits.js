
// in javascript
function Foo() {
    // code
}

Foo.prototype = {
    bar: function() {
        console.log('foo_bar running')
    }
};
/*
function Bar() {}
Bar.prototype = Object.create(Foo.prototype) // inherit
Bar.prototype.baz = function() {
    console.log('bar_baz running');
};

Foo.prototype.bar(); // foo_bar running
Bar.prototype.bar(); // foo_bar running
Bar.prototype.baz(); // bar_baz running
*/

// util.inherits() method
var util = require('util');

function Bar() {}

util.inherits(Bar, Foo) // inherit

Bar.prototype.baz = function() {
    console.log('Bar_baz running')
};

Foo.prototype.bar(); // foo_bar running
Bar.prototype.bar(); // foo_bar running
Bar.prototype.baz(); // Bar_baz running