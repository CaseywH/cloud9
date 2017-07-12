var express = require("express");

var app = express();


app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment"); 
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "bark"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
   res.send("The " + animal + " says '" + sound + "'" + "!"); 
});


app.get("/repeat/:word/:num", function(req, res){
    var rptWord = req.params.word;
    var freq = Number(req.params.num);
    var result = repeatWord(rptWord, freq);
    res.send(result);
});

function repeatWord(x, y) {
    var str = "";
    for(var i = 0; i < y; i++) {
        str += (x + " ");
    }
    return str;
}




app.get("*", function(req, res){
   res.send("Where are you going???"); 
});






app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});