/**
 * Retorna un valor usando Math.sin
 * Importante: Usar readable-stream para tener consistencia entre versiones
 */
var Readable = require('readable-stream').Readable;

module.exports = function(){

	var rs = new Readable({encoding:'utf8'});
	var angle = 0;
	/* Solo generamos un valor cuando estamos leyendo
	del stream */
	rs._read = function(){
		var sine = Math.abs((Math.sin(angle * (Math.PI / 180))) * 100);
		angle+=0.2;

		if(angle > 360)
			angle = 0;
		setTimeout(function(){
			rs.push(sine.toString(),'utf8');

		},100);
	}

	return rs
};
