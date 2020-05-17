let path = require("path");
let fs = require("fs");

let data = "";

let reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
reader.on("data", (chunk) => {
  data += chunk
});
reader.on("end", () => {
  console.log(data);
});

reader.resume();