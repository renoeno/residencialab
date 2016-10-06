var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var message = "olar.meu.amigo";
var check = false;

var dataHeader = 0x0f,
	dataFooter = 0xf0,
	i = 0;

portName = process.argv[2];

serialport.list(function(err, ports){
	ports.forEach(function(port){
		console.log(port.comName);
	})
});

var myPort = new SerialPort(portName, {
	baudRate: 9600,

	parser: serialport.parsers.readline("\n")
})

myPort.on('open', showPortOpen);
//myPort.on('data', sendSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

sendMessage();

function showPortOpen(){
	console.log('port open. Data rate: ' + myPort.options.baudRate);
	check = true;

}

function sendSerialData(data){
	console.log(data);
}

function showPortClose(){
	console.log('port closed.');
}

function showError(error){
	console.log('Serial port error: ' + error);
}

function sendMessage(){
for(var i=0; i<message.length; i++){
        myPort.write(new Buffer(message[i], 'ascii'), function(err, results) {
             console.log('Error: ' + err);
             console.log('Results ' + results);
        });
    }   
}