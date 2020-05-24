let {fork} = require("child_process");
let path = require("path");

//forkを使って子プロセスを生成する
//vscodeの場合、意図しない引数が勝手に入るため、
//execArgvに対して意図的に空配列[]を指定する必要がある
let child = fork( path.join(__dirname, "child.js"), {execArgv:[]} );


child.on("close", (code) => {
  console.log(`Child process exit with code ${code}`);
});