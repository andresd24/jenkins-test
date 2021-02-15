'use scrict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port || 3789;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/fifa', { useNewUrlParser: true })
    .then(() => {
        console.log('conexion started OK!')

        app.listen(port, () => {
            console.log('node and express are up');
        });
    })
    .catch(err => console.log(err));