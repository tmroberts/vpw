var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.render("index", {
    message: "Welcome to the Village at Prestonwood site!"
  });
});

var port = process.env.PORT || 5555;
app.listen(5555, function() {
  console.log('listening on port 5555.');
});
