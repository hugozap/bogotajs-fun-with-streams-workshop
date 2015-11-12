/**
 * Un stream que transforma un número de 0 a 100 en un color
 * 
 */
var through = require('through2');
var scale = require('scale-number-range');
var tinycolor = require('tinycolor2');



module.exports = function(){

	var colorStream = through(function write(inputValue, enc, callback){
		//Llevar a escala de 0 - 1
		var newVal = scale(parseFloat(inputValue.toString()), 0 , 100.0, 0,1);
		//Convertir a hsv (hue es el parámetro que cambia)
		var col = tinycolor.fromRatio({h:newVal, s:1, l:0.5})
		this.push(col.toHslString());
		callback();
		

	}, function end(){
		this.push(null);
	});

	return colorStream;
};
