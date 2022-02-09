// run by Node.js

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', function(line){
    if(line > 0){
        console.log('result > 0')
    } else if(line == 0){
        console.log('result = 0')
    } else {
        console.log('result < 0')
    }
    r1.close();
}).on('close', function(){
    process.exit();
});