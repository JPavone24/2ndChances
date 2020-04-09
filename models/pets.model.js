const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PetSchema = new Schema(
    { 
       typePet : {  type: String},
       typeBreed : {  type: String},
       petName : {  type: String},
       bio :  {  type: String},
       img: {  type: String},
    }
)

const PetsData = mongoose.model('PetsData', PetSchema)

module.exports = PetsData