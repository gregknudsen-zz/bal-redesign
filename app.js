const express = require('express');
const app = express();
const serveStatic = require('serve-static');

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

app.get("/", function(req, res){
  res.send('<html><head><link rel="stylesheet type="text/css" href="css/main.css" /></head><body><h1>HELLO</h1></body></html>')
});

app.get('/api', function(req, res){
  res.json({firstName: 'Greg', lastName: 'kman'})
});

app.listen(port);
