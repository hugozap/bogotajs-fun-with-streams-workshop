var smooth = require('./smoothStream.js');
var es     = require('event-stream');

es.readArray([1,2,3,4,5,4,3,2,1,0,-1,-2,-10])
.pipe(smooth(3)).pipe(es.join(',')).pipe(process.stdout);