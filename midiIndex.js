var midi = require('midi');

var output = new midi.output();
console.log(output.getPortCount());
console.log(output.getPortName(0));
output.openPort(0);

output.sendMessage([144,66,100]);

output.sendMessage([128,66,100]);


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}