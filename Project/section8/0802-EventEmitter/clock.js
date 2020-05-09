let EventEmitter = require("events");

let Clock = class extends EventEmitter {
  constructor() {
    super();
    this.interval = 2000;
    this.timer = null;
  }
  start() {
    if(this.timer) {
      this.stop();
    }
    //clearIntervalに必要なInterval IDを変数に格納する
    //setIntervalはグローバルオブジェクトの関数で、
    //Interval IDを返却する
    this.timer = global.setInterval(() => {
      this.emit("tick");
    }, this.interval);
}
  stop() {
    if(!this.timer) {
      return;
    }
    global.clearInterval(this.timer);
    this.timer = null;
  }
};
module.exports = Clock;