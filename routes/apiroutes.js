var express = require('express'); 
var router = express.Router();
const mongoose = require('mongoose')
let PetsData = require('../models/pets.model');
var ObjectId = require('mongodb').ObjectID;


router.get("/pets", function(req, res) {
  PetsData.find({})
  .then((data) =>{
      console.log('data: ', data)
      res.json(data)
  })
  .catch((error)=>{
      console.log('error: ', error)
  })
});


router.get("/pets/:petname", function(req, res) {
    console.log(req.params.petName)
    PetsData.find({petName: req.params.petname})
    .then((data) =>{
        res.json(data)
    })
    .catch((error)=>{
        console.log('error: ', error)
    })
  });
  


module.exports = router;