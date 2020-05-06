/*イベントループは、
処理開始 → キュー → フェーズの順に処理される。*/

/*setTimeoutを1ms(ミリ秒)に設定すると、
checkフェーズ(setImmediate)より先に
Timersフェーズ(setTimeout)が実行される。
※0msと書いた場合も、裏では1msとみなされる
これは、Timersフェーズに来たときに、
処理開始から1ms以上経っているかどうかの判定がされ、
判定Trueだった為である。
ただ、もし環境が変わりキューの処理速度などが早くなった場合、
Timersフェーズに来たときにまだ1ms以上経っていない
→スキップして次のフェーズへいく　という変化が起きる可能性がある。
この為、setTimeoutよりも
「後述のメソッドの直後に実行」を意味するsetImmediate()を
使用するのが望ましいとされる。
*/
setTimeout(() => {
  console.log("setTimeout()");
}, 1);

setImmediate(() => {
  console.log("setImmediate()");
});

process.nextTick(() => {
  console.log("nextTick()");
});

Promise.resolve().then(() => {
  console.log("Promise.resolve().then()");
});