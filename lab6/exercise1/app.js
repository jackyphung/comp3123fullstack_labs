var express = require('express');
var app = express();

app.listen(3000);

app.get('/html', function(req, res){
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/json', function(req,res){
    res.json({firstname: 'John', lastname: 'Smith'})
});

app.get('/toronto+team', function(req,res){
    res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');
});

app.get('/torontoraptorsteam', function(req,res){
    res.send('<html><head></head><body><h1>Go Raptors!</h1></body></html>');
});

app.get('/torontomarliesteam', function(req,res){
    res.send('<html><head></head><body><h1>Go Marlies!</h1></body></html>');
});

app.get('/torontoabcteam',function(req,res){
    res.send('<html><head></head><body><h1>Go ABC!</h1></body></html>');
});

app.get('/toronto*team',function(req,res){
    res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');
});