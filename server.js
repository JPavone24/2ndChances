
// =============================================================
var express = require("express");
var cors = require('cors')
var app = express();
var port = process.env.PORT || 8080;
var htmlroutes = require('./routes/htmlroutes');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cors())

app.use('/', htmlroutes);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
  