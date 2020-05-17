let path = require("path");
let filepath = "/Users/taniguchimana/workspace/node_js_study/Project/section9/0902-path/index.js";

console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));

console.log(path.join("Users/sample", "index.html"));

console.log(path.normalize("Users/lib/../sample/index.html"));