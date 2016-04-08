var express = require("express");
var app     = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});
app.get("/about", function(req, res) {
    res.render("about");
});

//starting the server
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started"); 
});