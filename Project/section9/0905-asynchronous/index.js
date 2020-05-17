let fs = require("fs");
let path = require("path");
const util = require("util");

let readFile = util.promisify(fs.readFile);
//let writeFile = util.promisify(fs.weiteFIle);
let writeFile = util.promisify(fs.writeFile);


(async function() {
  try {
    let data = await readFile(path.join(__dirname, "sample.txt"), "utf8");
    await writeFile(path.join(__dirname, "sample-copy2.txt"), data, "utf8");
    console.log("OK");
  } catch (err) {
    console.log(err.message);
  }
})();


/* async前
let fs = require("fs");
let path = require("path");
let util = require("util");

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.weiteFIle);


readFile(path.join(__dirname, "sample.txt"), "utf8")
  .then((data) => {
    return writeFile(path.join(__dirname, "sample-copy.txt"), data, "utf8");
  })
  .then(() => {
    console.log("OK");
  })
  .catch((err) => {
    console.log(err.message);
  });
*/


/* Promise化前
let fs = require("fs");
let path = require("path");

//fsのメソッドは基本的にコールバックの第一引数としてエラーの中身を取れる
fs.readFile(path.join(__dirname, "sample.txt"), "utf8", (err, data) => {
  if(err){
    console.log(err.message);
    return; //errorがあったら抜ける処理を書く
  }
  console.log(data);

  fs.writeFile(path.join(__dirname, "sample-copy.txt"), data, "utf8", (err) => {
    if(err) {
      console.log(err.message);
      return;
    }
    console.log("OK");
  });
});
*/