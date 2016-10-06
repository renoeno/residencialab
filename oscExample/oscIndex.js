var osc = require('node-osc');

var client = new osc.Client('127.0.0.1', 3333);
for(var i = 0; i < 10; i++){
client.send('/oscAddress', 200, function(){
	client.kill();
});
}