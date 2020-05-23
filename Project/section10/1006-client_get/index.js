let http =require("http");
let url = "http://localhost:3000";
let options = {
  method: "GET"
};
let req = http.request(url, options, (res) => {
  //process.stdoutはコンソールログの内部的に使われているオブジェクト(ストリーム)。
  //pipeでつなぐことができる。
  //vscodeで利用する場合は、
  //DEBUのオプション(launch.json)に追加が必要。
  res.pipe(process.stdout);

});
//明示的にendを呼ばないとreqされない。
req.end();