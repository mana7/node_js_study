let EventEmitter = require("events");
let ee = new EventEmitter();

/* 1回のみevent実行
let ontick = function () {
  console.log("event is called.");
  ee.off("event", ontick); //1回目実行最後にoffが働く
};

ee.on("event", ontick);

ee.emit("event");
ee.emit("event");
*/

/* onceを使うと下記の通り
let ontick = function () {
  console.log("event is called.");
};

ee.once("event", ontick);

ee.emit("event");
ee.emit("event");
*/

//functionとアロー関数でのthisの違い
ee.on("event", function() {
  console.log("function : \r\n", this);
}); //this : イベント処理を設定したクラスのインスタンス
ee.on("event", () => {
  console.log("arrow : \r\n", this);
}); //イベント処理の設定を行った処理環境のthisと同じ

ee.emit("event");