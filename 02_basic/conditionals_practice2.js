// run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
    var result = ''
    switch (line){
        case '200':
            result = 'wel';
        break;
        case '300':
            result = 'coco';
        break;
        case '500':
            result = 'icetea';
        break;
        default:
            result = line;
    break;
    }
    console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});
