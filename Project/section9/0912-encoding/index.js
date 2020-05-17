const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

//非同期関数でShift-JIS読み込んでコンソールログ表示
/*
fs.readFile(path.join(__dirname, "sample.txt"), (err,data) => {
console.log(iconv.decode(data, "shiftjis"))
});
*/

//非同期関数でShift-JISを書き込み
/*
fs.writeFile(
  path.join(__dirname, "test.txt"),
  iconv.encode("こんにちは", "shiftjis"),
  (err) => {
    console.log("OK")
  });
*/

//streamを利用してShift-JIS読み込んでコンソールログ表示
/*
let reader = fs.createReadStream(path.join(__dirname, "sample.txt"));
let decoder = iconv.decodeStream("shiftjis");
reader.pipe(decoder);
decoder.on("data", (chunk) => {
  console.log(chunk);
});
reader.resume();
*/

//streamを利用してShift-JISファイル書き込み
let encoder = iconv.encodeStream("shiftjis");
let writer = fs.createWriteStream(path.join(__dirname, "test.txt"));
encoder.pipe(writer);
encoder.write("こんにちは");
//encoder.end(); なくてもOKぽい
