var http = require("http");
var fs = require("fs");
/*
var myReadStream = fs.createReadStream(__dirname + "/test.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.pipe(myWriteStream)

*/
server = http.createServer(function (req, res) {
  console.log("user has made request to", req.url);
  res.writeHead(200, { ContentType: "text/plain" });
  var myReadStream = fs.createReadStream(__dirname + "/test.txt", "utf8");
  myReadStream.pipe(res);
});

server.listen(3000, "localhost");
console.log("server is listening to port 3000");
