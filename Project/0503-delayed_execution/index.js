///setTimeoutは飛ばされて、globalがまず表示される。
//その後、while処理が3秒間行われ、
//シングルスレッドのためsetTimeoutは待機状態になる。
//3秒後、ようやくsetTimeout()が表示される
setTimeout(() => {
  console.log("setTimeout()");
}, 100);

console.log("global");

let end = new Date().getTime() + 3000;
while ( new Date().getTime() < end ) { }