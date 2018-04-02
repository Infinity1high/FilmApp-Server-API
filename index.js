const express = require('express');
const http=require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');
const Film = require('./models/Films');
const MONGOLAB_URI = 'mongodb://userTest:12345@ds231529.mlab.com:31529/films';


mongoose.connect(MONGOLAB_URI, (err, db) => {
    if (err) {
        console.log('Not able to connect to db');
    } else {
        console.log('Conection to db');
    }
});



app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
const port = process.env.PORT || 8000;
const  server = http.createServer(app);

server.listen(port);
console.log('Server listen', port);