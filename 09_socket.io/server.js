// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { // chat.pug rendering
    res.render('chat');
});

var count=1; // 1 when login
io.on('connection', function(socket) {
    console.log('user connected: ', socket.id);
    var name = '익명' + count++;
    socket.name = name;
    io.to(socket.id).emit('create name', name);

    socket.on('disconnect', function() { // 2 when disconnect
        console.log('user disconnected: ' + socket.id + ' ' + socket.name);
    });

    socket.on('send message', function(name, text) { // 3 seng message
        var msg = name + ' : ' + text;
        socket.name = name;
        console.log(msg);
        io.emit('receive message', msg);
    });
});

http.listen(3000, function() {
    console.log('server on..');
})
