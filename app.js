var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  console.log("request made to", req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } 
  else if (req.url === "/contact") {
    res.writeHead(200, { ContentType: "text/html" });
    var myReadStream = fs.createReadStream(__dirname +"/contact.html");
    myReadStream.pipe(res);
  }
  else if(req.url==="/persons/api"){
    res.writeHead(200,{'ContentType':"application/json"})
    var persons=[{'name':'derryl','age':21},{'name':'deaa','age':42}]
    res.end(JSON.stringify(persons))
  }
   else
    {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname+'/404Error.html').pipe(res)
  }
});
server.listen(3000, "localhost");
