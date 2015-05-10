require('coffee-script/register');
var express = require('express'),
    app = express(),
    path = require('path');

app.set('view engine','jade');
app.set('views',path.join(__dirname,'templates'));
var routes = require('./routes')(app);
app.listen(3000);
