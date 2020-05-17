const { Readable } = require("stream");
const randomstring = require("./randomstring.js");
const data = randomstring();

let CustomReader = class extends Readable {
  constructor(options) {
    //もしoptionが何もない場合、強制的にencordingを渡す
    super(options || {encoding : "utf8"});
    this._current = 0;
  }

  _read(size) {
    let start = this._current;
    let end = (start + size < data.length) ? start + size : data.length;
    let chunk;
    
    try{
      chunk = data.slice(start, end);
    } catch (error) {
      process.nextTick(() => {this.emit("error", error);});
      return;

    }

    this.push(chunk);

    if(start + size < data.length){
      this._current = end;
    } else {
      this.push(null);
    }
  }

};

module.exports = CustomReader;