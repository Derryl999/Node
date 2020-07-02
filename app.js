var http = require("http");
var fs = require("fs");

server = http.createServer(function (req, res) {
  console.log("user has made request to", req.url);
  res.writeHead(200, { ContentType: "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
});

server.listen(3000, "localhost");
console.log("server is listening to port 3000");
