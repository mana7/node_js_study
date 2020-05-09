let Clock = require("./clock.js");
let i = 0;
let clock = new Clock();
//index.js側で、イベントの設定を行う
clock.on("tick", () => {
  console.log(++i);
  if(i > 3) {
    clock.stop();
  }
});
clock.start();