//execute me in the next event loop
process.nextTick(function() {
  console.log('Print me in second event loop 1');
});

//the event loop starts
console.log('Print me in first event loop 1');

//execute me in the next event loop
process.nextTick(function() {
  console.log('Print me in second event loop 2');
});

//last action in the first tick of the event loop
console.log('Print me in first event loop 2');

//execute me in the next event loop
process.nextTick(function() {
  console.log('Print me in second event loop 3');
});

