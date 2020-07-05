var express = require("express");
var app = express();
var bodyParser=require('body-parser')


var urlEncodedParser=bodyParser.urlencoded({extended:false})
app.set("view engine", "ejs");

app.use('/assets',express.static('assets'));

app.get("/", function (req, res) {
  res.render('index.ejs');
});

app.get("/contact", function (req, res) {
  console.log(req.query)
  res.render('contact',{qs:req.query})
  // res.sendFile(__dirname + "/contact.html");
});

app.post("/contact",urlEncodedParser, function (req, res) {
  console.log(req.body)
  res.render('contact-success',{qs:req.body})
});

app.get("/profile/:name", function (req, res) {
  var data={age:21,hobbies:["martial arts","singing","dancing","sleeping"],status:"student"}
  res.render("profile",{person:req.params.name,data:data});
});

app.listen(3000);
