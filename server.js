var express = require('express');
var app = express();

var resurses = require('./server/resourse.fs');
var path = require('path');
const PORT = 8880;

app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'jade');

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/vendor', express.static(path.join(__dirname, 'vendor')));
app.use('/app', express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res) {
  res.render('app', {
  	resurses: resurses
  });
});

app.listen(PORT);
console.log('Server started on port: ' + PORT);
