/*
 Este stream recibe el valor y agrega valores intermedios al stream
 para que no haya cambios bruscos,
 maxJump indica la diferencia máxima permitida
 */

var through = require('through');
module.exports = function(maxJump){

	maxJump = maxJump || 5; 
	var previous = null;
	return through(function(valueBuffer){
		var value = parseFloat(valueBuffer.toString());
		if(previous === null){
			this.push(value.toString());
			previous = value;
		}else{
			var diff = value - previous;
			var direction = diff>0?1:-1;
			if(Math.abs(diff)>maxJump){
				var steps = Math.abs(Math.floor(diff / maxJump));
				//Agregar n valores hasta llegar al valor
				do{
					var intermediate = previous + (maxJump * direction);
					this.push(intermediate.toString());
					previous = intermediate
				}while(--steps > 0);
			}
		}

	})
}