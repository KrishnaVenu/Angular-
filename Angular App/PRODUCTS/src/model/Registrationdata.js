const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Product');
const Schema = mongoose.Schema;
const RegistrationSchema = new Schema({
     email: String,
     password: String
      
});
var Registrationdata = mongoose.model('user',RegistrationSchema);
module.exports = Registrationdata;
