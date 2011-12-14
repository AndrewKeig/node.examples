var counterA=0;
var counterB=0;

var onePrivateMethod = function(name, counter) {
  return name + ' called '  + counter + ' times';
} ;

var onePublicMethod = function() {
  counterA = counterA + 1;
  return onePrivateMethod('onePublicMethod', counterA);
};

var anotherPublicMethod = function() {
  counterB = counterB + 1;
  return onePrivateMethod('anotherPublicMethod', counterB);
};


module.exports = {
  functionA: onePublicMethod,
  functionB: anotherPublicMethod
};

