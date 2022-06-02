const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const form = require('./model/models')





// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())




// define a root/default route
app.get('/', (req, res) => {
  res.json({"message": "Hello World"});
});

// Connecting to DB
mongoose.connect('mongodb://localhost:27017/subform', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
})

// Adding a form
app.post('/', (req, res) => {
    let { name, email, phone,address,dob } = req.body
    if (name && email && phone && address &&dob ){


    name = req.body.name,
    email = req.body.email,
    phone = req.body.phone,
    Description = req.body.Description
   let newForm = new form({
     name: name,
     email: email,
     phone: phone,
     Description: Description
    })
    newForm.save().then((form) => {
     res.send(form)
    }).catch((err) => {
     console.log(error)
    })
}

   })








// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});