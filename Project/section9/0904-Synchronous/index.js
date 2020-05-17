let fs =require("fs");
let path = require("path");

let data = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");
console.log(data);

fs.writeFileSync( path.join(__dirname, "sample-copy.txt"), data, "utf8" );