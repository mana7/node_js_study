//環境変数を一覧表示
//console.log(JSON.stringify(process.env, null));

//実行時引数を一覧表示
/*
for( let i = 0; i < process.argv.length; i++) {
  console.log(`${i} : ${process.argv[i]}`);
}
*/
/*
0:は、nodeのパス
1:は、実行したファイルのパス
2:以降が引数となる　※node index.js a b c とかでやると出力される
*/

//カレントワークディレクトリ、実行中ファイルのディレクトリを表示
/*
console.log(`cwd(): ${process.cwd()}`);
console.log(`__dirname: ${__dirname}`);
*/

//実行環境を表示
console.log(process.platform);