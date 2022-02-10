// os module
var os = require('os');

console.log(os.tmpdir()); //C:\Users\...\Temp
console.log(os.type()); // Windows_NT

// os.cpus
var cpus = os.cpus();

for(var i =0; i < cpus.length; i++) { // 0 1 2 3
    console.log('CPU[' + (i+1) + ']');
    console.log('model :' + cpus[i].model); // Intel(R) core(TM) ... * 4
    console.log('speed: ' + cpus[i].speed); /// 2712 * 4
}