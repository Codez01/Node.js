
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("login.html");
const jquery = require("jquery")(dom.window);
// ***********importing modules********************\
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const port = 3000;
var dir = path.join(__dirname);

// this code is for enabling images in express.js
app.use(express.static(dir));



// sendFile will go here ( for sending html)
app.get('/', function (req, res) {
  res.sendFile(dir + "/index.html");
});

app.get('/login', function (req, res) {
  res.sendFile(dir + "/login.html");
});



app.post('/login', function (req, res) {

  //use JSON.Stringify(req.body) inorder to prevent object error
  console.log("the request body is : " + JSON.stringify(req.body));

  if (req.body.email1 == "hanna@gmail.com") {
    jquery("h1").innerText = "right person!";
  }
  else {
    res.send("Regular User");
  }

});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})














