var express = require('express');
var app = express();
const bodyparser = require('body-parser');
const path = require('path');
const dbController = require('./client/db/dbController')
const resource = require('./client/db/models/resourceModels')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.connect('mongodb://person:password123@ds125831.mlab.com:25831/ithaca-project',
() => console.log('inside fetch request'));


app.use(express.static(path.join(__dirname, "public")));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, "public/index.html")));
app.get('/resources', 
    dbController.getFiles);
app.listen(8080); //listens on port 3000 -> http://localhost:3000/

// ,
// (req, res) => {
//     console.log('inside get route')
//     let data = resource.find();
//     console.log(data)
//     res.json(resource.find());
//   }