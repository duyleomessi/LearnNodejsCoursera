/**
 * Created by root on 17/03/2016.
 */

var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log('Server running at ' + hostname + ':' + port + '/');
});