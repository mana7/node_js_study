let path = require("path");
let fs = require("fs");

/*
let writer = fs.createWriteStream(path.join(__dirname, "created.txt"), "utf8");
writer.end("Hello World !");
*/

//読み込んだファイルをパイプして出力する
let reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
let writer = fs.createWriteStream(path.join(__dirname, "sample-copy.txt"), "utf8");
reader.pipe(writer);
reader.resume();