var numberToColorStream = require('./numberToColorStream.js');
var randomNumberStream  = require('./randomNumberStream.js')
var sinStream           = require('./sinSequenceNumberStream.js')
var delay               = require('delay-stream');
var Throttle            = require('throttle');
var through             = require('through2')
var SensorStream        = require('./sensorStream.js');

randomNumberStream()
// .pipe(process.stdout);
// new SensorStream()
	//.pipe(numberToColorStream)
	.pipe(process.stdout);

	// .pipe(through(function(chunk, enc, cb){

	// 	console.log(chunk.toString());
	// 	cb();
	// }))
