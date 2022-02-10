// utility
var util = require('util');
var data = util.format('%d, %s, %j', 6, 'chapter', {content: 'module'}); // num, string, json (javascript object notation)

console.log(data); // 6, 'chapter', {content: 'module'}
util.log('message') // timestamp + message