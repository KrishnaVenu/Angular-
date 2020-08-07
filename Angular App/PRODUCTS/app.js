const express = require('express');
const ProductData = require('./src/model/Productdata');
const Registrationdata = require('./src/model/Registrationdata');
const cors = require('cors');
const updateRouter = require('./src/routes/updateRoutes');
 const productRouter = require('./src/routes/productRoutes');
const registrationAdminRouter = require('./src/routes/registrationAdminRoutes');

var bodyparser = require('body-parser');
var app = new express();

app.use(cors());
app.use(bodyparser.json())
app.use('/update',updateRouter);
app.use('/admin',registrationAdminRouter);
app.use('/p',productRouter);
app.get('/',(req,res)=>{
      res.send('The server is running');
})
  
app.listen(3000,()=>console.log('listening to port 3000'));
