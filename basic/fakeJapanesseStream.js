/**
 * Creación de un Stream (transform) básico
 * usando through
 */
var through = require('through');

//------ Definición del nuevo stream -----//

var myStream = through(function write(bufferPalabra){

	var opts = [

		'iroki',
		'aka',
		'hari',
		'tago',
		'ichiwa',
		'asai',
		'anata',
		'suka',
		'maki'
	]
	//Seleccionar aleatoriamente un sufujo
	var suffix = opts[Math.floor(Math.random()*(opts.length-1))]
	this.push(bufferPalabra.toString() +  suffix);
})

module.exports = myStream;