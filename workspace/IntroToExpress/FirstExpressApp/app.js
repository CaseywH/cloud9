var express = require("express");

var app = express();

// "/" => "Hi, there!"

app.get("/", function(req,res){
   res.send("hi there"); 
});


// "/bye" => "goodbye"

app.get("/bye", function(req,res){
    res.send("goodbye");
});

// "/dog" => "MEOW"
app.get("/dog", function(req, res) {
    console.log("someone made a request to dog")
   res.send("meow"); 
});

app.get("/r/:subredditName", function(req, res) {
    var subredditName = req.params.subredditName;
   res.send("welcome to " + subredditName.toUpperCase() + " SUBREDDIT!"); 
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
   res.send("welcome to the comments page"); 
});

app.get("*", function(req, res){
   res.send("YOU ARE A STAR"); 
});


// Tell Express to listen for requests

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});
