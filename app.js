const express = require('express');
const app = express();

let port = process.env.PORT || 3000;

app.get("/", function(req, res){
  res.send('<html><head></head><body><h1>HELLO</h1></body></html>')
});

app.get('/api', function(req, res){
  res.json({firstName: 'Greg', lastName: 'kman'})
});

app.listen(port);
