const mongoose = require('mongoose');



// Schema for form
const formSchema = mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    email: {
     type: String,
     required: true,
    lowercase: true },
    dob: { type: Date,required: true },
    phone: {
     type: Number,
     required: true
    },
    address: {type: String,
    required: true
    },
   })
   //Creating the collection Address
   const form = mongoose.model('form', formSchema)

   module.exports = form;
