var eventEmitter = require('events').EventEmitter
var util = require('util');

function bhikkhu() {
  util.log('awaken the bhikkhu..');
}

util.inherits(bhikkhu, eventEmitter);

bhikkhu.prototype.meditate = function() {
  var self = this;
  var breathType = 'out';
  util.log('bhikkhu starts breathing');
  setInterval(function() {
    breathType = takeBreath(breathType);
    self.emit('breath', breathType);
  }, 3000);
}

function takeBreath(breathType)
{
  if (breathType === 'in') {
    return 'out';
  }
  else
  {
    return 'in';
  }

}

var bhikkhu = new bhikkhu();

bhikkhu.on('breath', function(breath) {
  util.log('bhikkhu observes ' + breath + ' breath ');
});


bhikkhu.meditate();