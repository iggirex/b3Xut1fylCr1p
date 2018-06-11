var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var routes = require("./routes/index");

var hbs = require("express-handlebars");

// view engine setup
app.engine("hbs", hbs({extname: "hbs", defaultLayout: "layout", layoutsDir: __dirname +"/views/"}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

/* serves main page */
app.get("/", function(req, res) {
   res.sendfile('index.html')
});


/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
