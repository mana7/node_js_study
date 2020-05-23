let http = require("http");
let server = http.createServer((req, res) => {
  console.log(
    `日時[${(new Date()).toISOString()}]` +
    `メソッドとURL: ${req.method} ${req.url}` +
    `エージェント: ${req.headers["user-agent"]}`
  );
  //user-agentとは、各ブラウザが使用しているパソコンのブラウザやOSの情報

  res.end("Hello World !");
});

server.listen(3000);