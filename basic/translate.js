var fakeJapanesse = require('./fakeJapanesseStream.js');
var es = require('event-stream');
var fs = require('fs');

process.stdin
	.pipe(es.split(/[\r\s\n]/))
	.pipe(fakeJapanesse)
	.pipe(es.join(' '))
	.pipe(process.stdout);
