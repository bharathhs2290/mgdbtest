/**
 * Created by bharath on 1/12/2016.
 */
var express = require('express');

//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/iot');

var PORT = process.env.PORT || 3000;

var app = express();


//var ioDeviceSchema = new mongoose.Schema({
//    devID:String,
//    temp:Number,
//    swtchState:Boolean,
//    serialno:Number
//});
//
//var iod =mongoose.model('cat',ioDeviceSchema);
//
//iod.create({
//
//  devID:"N8237",
//  temp:58,
//  swtchState:false
//
//},function(err,cat){
// if(err){
//   console.log(err);
// }
//  else{
//   console.log(cat);
// }
//
//});




app.get('/',function(req,res){

   // iod.find({},function(err,data){

       // console.log(data);
        res.send("data");

    });






app.listen(PORT);