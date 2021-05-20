var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var cors=require('cors');

const approutes = require('./Routes/app.Routes');

var http=require('http');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/crud');

app.use(cors());

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




app.use('/',approutes);

http.createServer(app).listen(port);
console.log("server is running ",port);
