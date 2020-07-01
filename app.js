var http = require("http");

server = http.createServer(function (req, res) {
  console.log("user has made request to", req.url);
  res.writeHead(200, { ContentType: "text/plain" });
  res.end("hello buddy");
});
server.listen(3000, "localhost");
console.log("server is listening to port 3000");
