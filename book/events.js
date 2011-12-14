
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Ninja = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.attack_frequency = 300;
  console.log('Ninjaaaaaa!');
}

util.inherits(Ninja, EventEmitter);

Ninja.prototype.Attack = function() {
  var self = this;
  self.emit('Sword', this.firstname, this.surname);
  
  var interval = setInterval(function() {
    self.emit('Strike');
  }, self.attack_frequency); 
  
  setTimeout(function() {
    self.emit('Stop');
    clearInterval(interval)
    self.Meditate();
  }, 3000); 
}

Ninja.prototype.Meditate = function() {
  if (this.attack_frequency !== 0)  
    this.attack_frequency = this.attack_frequency - 100;
    
  this.emit('Meditate', this.firstname, this.surname);
}

var myInstance = new Ninja('master', 'keig');

myInstance.on('Sword', function() {
  var message = this.firstname + ' ' + this.lastname + ' attacks an opponent';
  console.log(message);
});

myInstance
.on('Strike', function() {
  var message = this.firstname + ' ' + this.lastname + ' swings his sword at opponent';
  console.log(message);  
})
.on('Stop', function() {
  var message = this.firstname + ' ' + this.lastname + ' stops attacking his opponent';
  console.log(message);  
})
.on('Meditate', function() {
  var message = this.firstname + ' ' + this.lastname + ' meditates; ';
  console.log(message);  
});



myInstance.Meditate();
myInstance.Meditate();
myInstance.Meditate();
myInstance.Meditate();
myInstance.Meditate();
myInstance.Meditate();
myInstance.Meditate();
myInstance.Attack();




//delayed until the next event loop
process.nextTick(function() {
  console.log('you underestimated my powers and will pay with your life');
});

