var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog");
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/contact", function(req, res){
   res.render("contact"); 
});

app.get("/menu", function(req, res){
   res.render("menu"); 
});

app.get("/schedule", function(req, res){
   res.render("schedule"); 
});

app.get("/reservations", function(req, res){
    res.render("reservations");
})

app.get("*", function(req, res) {
   res.send("You've ended up somewhere that doesn't exist...") 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server is listening...');
});
