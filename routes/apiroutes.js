var express = require('express'); 
var router = express.Router();
const mongoose = require('mongoose')
let PetsData = require('../models/pets.model');
var ObjectId = require('mongodb').ObjectID;
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
});

router.post('/pets', upload.single('img'),function (req, res) {
    console.log(req.body)
    console.log(req.file)
  const Pet = new PetsData({
    _id: new mongoose.Types.ObjectId(),
    typePet : req.body.typePet,
    typeBreed : req.body.typeBreed,
    petName : req.body.petName.toLowerCase(),
    bio :  req.body.bio,
    img: req.file.filename
})  
 Pet.save()  
.then(result =>{
    console.log(result)
})
res.end()
})

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