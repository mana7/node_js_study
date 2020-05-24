setTimeout(() => {
  console.log("Hello World !");
}, 3000);

//index.js(親プロセス)の実行後
//child(子プロセス)内のconsole.log表示をするには、
//デバッグメニューのオプションに
//"outputCapture": "std"  が必要