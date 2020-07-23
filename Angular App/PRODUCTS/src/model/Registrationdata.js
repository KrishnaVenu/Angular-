const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Product');
const Schema = mongoose.Schema;
const RegistrationSchema = new Schema({
         Name: String,
        Email: String,
     Password: String,
      Address: String,
     Address2: String,
      Country: String,
        State: String
});
var Registrationdata = mongoose.model('product',RegistrationSchema);
module.exports = Registrationdata;