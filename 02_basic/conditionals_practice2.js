// run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
    var result = ''
    if (line == 200){
        result = 'wel'
    } else if (line == 300){
        result = 'coco'
    } else if (line == 500){
        result = 'icetea'
    } else {
        result = line
    }
    console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});