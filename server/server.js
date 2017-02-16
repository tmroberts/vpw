var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.render("index", {
    message: "Welcome to the Village at Prestonwood site!"
  });
});

// If PROD/heroku use process.env.PORT
// If localhost use the hard-coded port 5555 ... hence the 'OR'
var port = process.env.PORT || 5555;
app.listen(port, function() {
  console.log('listening on port.', port);
});
