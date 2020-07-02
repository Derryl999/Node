var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use('/assets',express.static('assets'));

app.get("/", function (req, res) {
  res.render('index.ejs');
});

app.get("/contact", function (req, res) {
  res.render('contact.ejs')
  // res.sendFile(__dirname + "/contact.html");
});
app.get("/profile/:name", function (req, res) {
  var data={age:21,hobbies:["martial arts","singing","dancing","sleeping"],status:"student"}
  res.render("profile",{person:req.params.name,data:data});
});

app.listen(3000);
