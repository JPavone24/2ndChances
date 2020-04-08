
// =============================================================
var express = require("express");
var cors = require('cors')
var app = express();
var PORT =  process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cors())

var htmlroutes = require('./routes/htmlroutes');
app.use('/', htmlroutes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
  