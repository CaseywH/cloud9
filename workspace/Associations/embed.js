var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient: true});

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);




// USER - email, name
var userSchema = new mongoose.Schema({
  email:String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "hermione granger"
// });

// newUser.posts.push({
//     title: "how to brew polyjuice potion",
//     content: "just kidding go to potions class"
// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Refelections on apples",
//     content: "they are delicious"
// });

// newPost.save(function(err, post){
//     if (err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

User.findOne({name: "hermione granger"}, function(err, user){
    if (err){
        console.log(err)
    }else{
        console.log(user)
    }
})