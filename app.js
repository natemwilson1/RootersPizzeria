var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    flash = require('connect-flash');

mongoose.connect("mongodb://localhost/rooters");
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

app.use(function(req, res, next) {
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.get("/", function(req, res) {
    res.render("home", { title: "Rooter's Pizzeria" });
});

app.get("/contact", function(req, res) {
    res.render("contact", { title: "Rooter's Pizzeria | Contact" });
});

app.post("/contact", function(req, res) {
    req.flash("success", "Thanks for your message!")
    res.redirect("/");
});

app.get("/menu", function(req, res) {
    res.render("menu", { title: "Rooter's Pizzeria | Menu" });
});

app.get("/schedule", function(req, res) {
    res.render("schedule", { title: "Rooter's Pizzeria | Schedule" });
});

app.get("/reservations", function(req, res) {
    res.render("reservations", { title: "Rooter's Pizzeria | Reservations" });
});

app.post("/reservations", function(req, res) {
    req.flash("success", "Reservation request sent!")
    res.redirect("/");
});

app.get("*", function(req, res) {
    res.send("You've ended up somewhere that doesn't exist...")
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server is listening...');
});


// Make forms post and send email use mailgun

// choose real name and buy domain


