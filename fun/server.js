var shoe                = require('shoe');
var http                = require('http');
var numberToColorStream = require('./numberToColorStream.js');
var randomNumberStream  = require('./randomNumberStream.js')
var sinStream           = require('./sinSequenceNumberStream.js')
var SensorStream        = require('./sensorStream.js');
var smoothStream        = require('./smoothStream.js');

 
// Servidor básico http 
var ecstatic = require('ecstatic')(__dirname + '/browser');
var server = http.createServer(ecstatic);
server.listen(9999);

//Crear web socket como stream 
var sock = shoe(function (stream) {
	
	   	sinStream()
			.pipe(numberToColorStream())
			.pipe(stream)


    stream.on('end', function () {
        console.log('socket closed');
    });
    
   
});

sock.install(server, '/colors');