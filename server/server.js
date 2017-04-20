var express = require('express');
var app = express();

// Added for SendGrid implementation
var bodyParser = require('body-parser');
var request = require("request");
var btoa= require("btoa");


app.use(express.static('public'));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res) {
  res.render("index", {
    message: "Welcome to the Village at Prestonwood site!"
  });
});

app.post('/sendemail', function (req, res) {
  res.send('Got a POST request');
  console.log('POST received', req.body);  //This prints the JSON document received (if it is a JSON document)
  //console.log(request.body.formFieldName);
  var name=req.body.name;
  var email=req.body.email;
  var phone=req.body.phone;
  var info=req.body.info;
  console.log("Name = ", name);
  console.log("Email is "+email+"");
  var html = 'Name: ' + name + '\r\n \r\n' +
  'Email: ' + email + '\r\n \r\n' +
  'Phone Number: ' + phone + '\r\n \r\n' +
  'Additional Information: ' + info + '\r\n \r\n' ;
  //res.send(html);

  // using SendGrid's v3 Node.js Library
  //https://github.com/sendgrid/sendgrid-nodejs
  var helper = require('sendgrid').mail;

  from_email = new helper.Email("villageatprestonwood@example.com");
  //to_email = new helper.Email("tmroberts7@gmail.com");
  to_email = new helper.Email("kmroberts7@gmail.com");
  //kmroberts@gmail.com gets forwarded to hometexas as well so Kathy will get both emails
  //to_email = new helper.Email("trkr6@verizon.net");
  subject = "Village at Prestonwood Contact";
  content = new helper.Content("text/plain", html);
  mail = new helper.Mail(from_email, subject, to_email, content);

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function(error, response) {
    console.log(response.statusCode)
    console.log(response.body)
    console.log(response.headers)
  })
})

// npm run-script node server/server.js
// sh launch.sh

// If PROD/heroku use process.env.PORT
// If localhost use the hard-coded port 5555 ... hence the 'OR'
var port = process.env.PORT || 5555;
app.listen(port, function() {
  console.log('listening on port.', port);
});
