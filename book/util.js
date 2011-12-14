
var util = require('util');

console.log('Welcome to Examples with Node.js');

console.log('logging with util');
util.log('help');

//inspect object properties
//util.inspect(a, showHidden, depth = 2, showColors);
console.log('inspecting objects with util');
var a = {id:1, name:'Andrew'}
console.log(util.inspect(a, true));


//buffers
//var buf2 = new Buffer('8b76fde713ce', 'base64');
console.log('Buffering');
var buf1 = new Buffer('Hello World!');
console.log(buf1);
console.log(buf1.toString());

console.log('buffer and slice with util');
var buffer = new Buffer('this is the string in my buffer');
var slice = buffer.slice(12, 31);

console.log(slice);
console.log(slice.toString());


var buffer = new Buffer('Its more fun to compute adads asd ');
var slice = new Buffer(13);
var targetStart = 0,
sourceStart = 9,
sourceEnd = 22;
buffer.copy(slice, targetStart, sourceStart, sourceEnd);

console.log(slice);
console.log(slice.toString());





