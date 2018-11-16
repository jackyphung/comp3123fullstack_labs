var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('');
var port = process.env.PORT || 3000;
app.listen(port);

mongoose.connect('mongodb://admin:admin1@ds135233.mlab.com:35233/local_library')

var Schema = mongoose.Schema;

var userSchema = new Schema ({ name: String, status: String});

var User = mongoose.model('User', userSchema);

var john = User({ name: 'John', status: 'active'});

john.save(function(err){
    if (err) throw err;
    console.log('**** User saved! ****');
});

var janeSchema = new Schema ({name: String, status: String });

var User2 = mongoose.model('User', janeSchema);
var jane = User2({name: 'Jane', status: 'very active'});

jane.save(function(err){
    if(err) throw err;
    console.log('Saved');
})