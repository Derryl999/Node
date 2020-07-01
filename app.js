//reading and writing files
var fs = require("fs");

//synchronous reading and writing

var file=fs.readFileSync('test.txt','utf8')
fs.writeFileSync('writeFile.txt',file)


//asynchronous reading and writing

fs.readFile("test.txt", "utf8", function (err, data) {
  console.log(data);
  fs.writeFile("abc.txt", data, (err) => {});
});
console.log("hello");
