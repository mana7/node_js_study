//子から親プロセスにメッセージ
/*
setTimeout(() => {
  process.send({ hello: "message from child."});
}, 3000);
*/

//親から子プロセスにメッセージ
process.on("message", (data) => {
  console.log(data);
  //一度メッセージ受け取ってコンソール表示したら、
  //コード0で正常終了する
  //0を指定しなくても、正常終了なら0が返される
  process.exit(0);
});