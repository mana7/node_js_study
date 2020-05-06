console.log("Hello");
//下記はフォーマットを利用した出力方法
//オブジェクトを表示する場合、%oを使う
//第2引数に、%oの箇所に埋め込む内容を記述する
console.log("Message: %o", {hello: "world"});

//プログラムの実行過程(スタックトレース)を出力することができる
//エラー発生時に、エラーの内容+エラー発生までの過程を出力できるので便利
console.trace("World");
//vscodeのデバッグ機能だと、
//スタックトレース部分がダブって出力されるバグがある