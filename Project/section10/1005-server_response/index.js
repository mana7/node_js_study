let http = require("http");
let fs = require("fs");
let path =require("path");


let server = http.createServer((req, res) => {
  //user-agentとは、各ブラウザが使用しているパソコンのブラウザやOSの情報
  console.log(
    `日時[${(new Date()).toISOString()}]` +
    `メソッドとURL: ${req.method} ${req.url}` +
    `エージェント: ${req.headers["user-agent"]}`
  );
  
  //もしリクエストがPOSTだったら、リクエストボディーを返す
  if(req.method==="POST") {
    req.pipe(res);
  } else {
    //その他の場合、sample.txtを読み込み、レスポンスに渡す
    let reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
    reader.pipe(res);
  }
});

server.listen(3000);