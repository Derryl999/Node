var http = require("http");
var fs = require("fs");

server = http.createServer(function (req, res) {
  console.log("user has made request to", req.url);
  res.writeHead(200, { ContentType: "application/json" });
  var myObj = { name: "derryl", age: 21, status: "student" };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, "localhost");
console.log("server is listening to port 3000");
