
// =============================================================
var express = require("express");
var cors = require('cors')
var app = express();
var mongoose = require('mongoose')
var port = process.env.PORT || 8080;
var htmlroutes = require('./routes/htmlroutes');
var apiroutes = require('./routes/apiroutes');
// Sets up the Express app to handle data parsing
require('dotenv').config();     
const uri = process.env.MONGODB_URI;
mongoose.connect( uri, {
   useNewUrlParser: true, 
   useCreateIndex: true ,  
   useUnifiedTopology: true }
)
mongoose.connection.on('connected', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cors())

app.use('/', htmlroutes);
app.use('/api', apiroutes);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
  