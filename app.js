const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000, function(){
  console.log('Server running on port 3000');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get("/home",  function(req, res) {
  res.sendFile(__dirname + "/home.html");
});
app.get("/services",  function(req, res) {
  res.sendFile(__dirname + "/services.html");
});
app.get("/aboutus",  function(req, res) {
  res.sendFile(__dirname + "/aboutus.html");
});
app.get("/contact",  function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});
app.get("/projects",  function(req, res) {
  res.sendFile(__dirname + "/projects.html");
});

