//子から親プロセスにメッセージ
/*
let {fork} = require("child_process");
let path = require("path");

let child = fork( path.join(__dirname, "child.js"), {execArgv: []} );

child.on("message", (data) => {
  console.log(data);
});

child.on("close", (code) => {
  console.log(`Child process exited with code ${code}`);
});
*/

//親から子プロセスにメッセージ
let {fork} = require("child_process");
let path = require("path");

let child = fork( path.join(__dirname, "child.js"), {execArgv: []} );

child.send({hello: "message from parent."});
child.on("close", (code) => {
  console.log(`Child process exited with code ${code}`);
});