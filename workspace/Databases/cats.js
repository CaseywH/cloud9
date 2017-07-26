var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// //add new cat to DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });
// // george.save(function(err, cat){
// //     if(err){
// //         console.log("something went wrong")
// //     } else{
// //         console.log("we save a new cat");
// //         console.log(cat);
// //     }
// // });

Cat.create({
   name:"Snow White",
   age: 15,
   temperament: "bland"
}, function (err, cat){
    if (err){
        console.log(err);
    }else {
        console.log(cat);
    }
});

//retrieve all cats from DB and console.log each one

Cat.find({}, function(err, cats){
    if (err){
        console.log("oh no error");
        console.log(err);
    }else {
        console.log("all the cats");
        console.log(cats);
    }
})
