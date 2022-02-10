// main.js

var express = require('express');
var app = express();

app.locals.pretty = true;
app.set('viwes', '.views');
app.set('view engine', 'pug');
app.listen(3000, () => {
    console.log('Server has been started');
});

// if go to /, redirect /test
app.get('/', (req, res) => {
    res.redirect('/test');
});

// pug file rendering
app.get('/test', (req, res) => {
    res.render('test', {title : 'Test', massage: 'Redirect to test page'})
})
