/**
 * Created by root on 18/03/2016.
 * */

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.all('/dishes', function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    next();
});

app.get('/dishes', function (req, res, next) {
    res.end('Will send all the dishes to you');
});

app.post('/dishes', function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/dishes', function (req, res, next) {
    res.end('Deleting all dishes');
});

app.get('/dishes/:dishId', function (req, res, next) {
    res.end('Wil send the dish with id: ' + req.params.dishId + 'for you');
});

app.put('/dishes/:dishId', function (req, res, next) {
    res.write('Updating the dish: ' + res.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with detail ' + req.body.description);
});

app.delete('/dishes/:dishId', function (req, res, next) {
    res.end('Deleting dish: ' + req.params.dishId);
});

app.listen(port, hostname, function () {
    console.log('Server running at: ' + hostname + ':' + port + '/');
});