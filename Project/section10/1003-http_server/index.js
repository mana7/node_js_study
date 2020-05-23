let http = require("http");
let server = http.createServer((req, res) => {
  res.end("Hello World");

});

server.listen(3000); //port番号指定
//ブラウザを起動し、
//localhost:3000で実行すると
//Hello Worldと表示されるのがわかる