var midi = require('midi');
var output = new midi.output();

for(var i = 0; i < output.getPortCount(); i++){
	console.log(output.getPortName(i));
}

output.openPort(0);

output.sendMessage([176,22,1]);

output.closePort();