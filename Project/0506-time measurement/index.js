let sum = 0;
console.time("timer1");
for (let i = 1; i <= 1000; i++) {
  sum += i;
};
console.timeEnd("timer1");

//vscodeのデバッグ機能だと、timer1:が2行出るが、
//計測した時間は2行目のみ注目すれば良い。
//terminalだと、1行のみ出力される