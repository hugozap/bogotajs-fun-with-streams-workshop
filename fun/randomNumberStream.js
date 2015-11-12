/**
 * Retorna un stream que genera
 * números aleatorios de manera infinita
 */
var Readable = require('readable-stream').Readable;

module.exports = function(){

	var rs = new Readable({encoding:'utf8'});

	/* Solo generamos un valor cuando estamos leyendo
	del stream */
	rs._read = function(){

		var num = 1+Math.floor(Math.random()*100);
		setTimeout(function(){
			rs.push(num.toString(),'utf8');

		},100);
	}

	return rs
};
