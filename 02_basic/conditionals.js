// if statement
var a = 3;
var result = '';
if(a > 2){
    result = 'a > 2'
} else if(a == 2){
    result = 'a = 2'
} else {
    result = 'a < 2'
}
console.log(result); // a > 2

// switch statement
var a = 1;
var result = '';
switch (a){
    case 1:
        result = 'num 1';
    break;
    case 2:
        result = 'num 2';
    break;
    default:
        result = 'don\'t know';
break;
}
console.log(result);