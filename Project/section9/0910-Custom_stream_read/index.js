/* customstream使わない場合
let randomstring = require("./randomstring.js");
console.log(randomstring());
*/

let CustomReader = require("./customreader.js");
let reader = new CustomReader();
//streamの"data"イベントを定義
reader.on("data", (chunk) => {
  console.log(chunk);
});
reader.resume();