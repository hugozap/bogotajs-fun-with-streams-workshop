var five = require("johnny-five");
var util = require('util');

var Readable = require('readable-stream').Readable;

module.exports = function(){

  util.inherits(SensorWrapper, Readable);

  function SensorWrapper(options) {

    Readable.call(this, options);
    this.lastValue = 0;
    this.lastTimestamp =  new Date().getTime();
    this.sampleTime = 100; //every 500 ms

    this._source = new five.Board();
    var self = this;

    this._source.on("ready", function() {
      var proximity = new five.Proximity({
        controller: "HCSR04",
        pin: 7
      });

      proximity.on("data", function() {
        console.log(this.cm + "cm");
        self.lastValue = this.cm;
        var now = new Date().getTime();
        //Sample at a rate of sampleTime ms
        console.log('DIFF:',now - self.lastTimestamp);
        if(now - self.lastTimestamp >= self.sampleTime){
          console.log('BOOOM')
          self.push(self.lastValue.toString());
          self.lastTimestamp = now;
        }
      });

      proximity.on("change", function() {
        console.log("The obstruction has moved.");
      });
    });

    // Every time there's data, we push it into the internal buffer.
    // this._source.ondata = function(chunk) {
    //   // if push() returns false, then we need to stop reading from source
    //   if (!self.push(chunk))
    //     self._source.readStop();
    // };

    // When the source ends, we push the EOF-signaling `null` chunk
    // this._source.onend = function() {
    //   self.push(null);
    // };
  }

  // _read will be called when the stream wants to pull more data in
  // the advisory size argument is ignored in this case.
  SensorWrapper.prototype._read = function(size) {

  };

  return SensorWrapper;
}();



