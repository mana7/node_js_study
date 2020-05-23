let http = require("http");
let data = "Hello World !";
let url = "http://localhost:3000";
let options = {
  method: "POST",
  headers: {
    //formでPOSTしたことを再現
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(data)
  }
};
let req = http.request(url, options, (res) => {
  res.pipe(process.stdout);
});
//エラー処理
//サーバーが起動していない場合、
//connect ECONNREFUSED と表示される
req.on("error", (err) => {
  console.log(err.message);
});

req.end(data);