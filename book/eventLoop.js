setTimeout(function() {
  console.log('this is the first event in the queue for event loop tick 1');
}, 2000);

process.nextTick(function () {
  console.log('this is the second event in the queue for event loop tick 1');
});

process.nextTick(function () {
  console.log('this is the third event in the queue for event loop tick 1');
});

console.log('not added to the queue; straight to console');