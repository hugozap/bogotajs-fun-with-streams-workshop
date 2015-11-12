var numberToColorStream = require('./numberToColorStream.js');
var randomNumberStream  = require('./randomNumberStream.js');
var sinSequence         = require('./sinSequenceNumberStream.js');
var domready            = require('domready');
var through             = require('through');
var Throttle            = require('throttle');
var shoe                = require('shoe');

var serverStream  = shoe('/colors');



domready(function(){

	 //randomNumberStream
	 //sinSequence
	 serverStream
	 	.pipe(through(flame))
	 	.pipe(through(stampColor));

})


function flame(color){

	var item                   = document.createElement('div');
	var container              = document.querySelector('.engine')
	item.className             = 'item';
	item.style.backgroundColor = color.toString();

	//item.style.left = Math.random() > 0.5 ? '0': '400px';
	item.classList.add('out');
	container.appendChild(item);

	setTimeout(function(){
		container.removeChild(item);
	},5000);

	this.push(color);
}


function stampColor(color){

	var item = document.createElement('div');
	item.className = 'item2';
	item.style.backgroundColor = color.toString();
	var container = document.querySelector('.colors');
	container.appendChild(item);
	// container.insertBefore(item, container.firstChild);
	container.scrollTop = container.scrollHeight;

}
